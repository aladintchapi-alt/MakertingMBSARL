import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { WebSocket } from 'ws';

const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const BASE_URL = 'http://localhost/MakertingMBSARL/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  console.log('--- Launching Chrome for Deliverable Evidence Captures ---');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--disable-web-security'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  const http = await import('http');
  const targets = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let msgId = 1;
  const send = (method, params = {}) => new Promise((resolve) => {
    const id = msgId++;
    const handler = (data) => {
      const parsed = JSON.parse(data.toString());
      if (parsed.id === id) {
        ws.off('message', handler);
        resolve(parsed.result);
      }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await new Promise(res => ws.on('open', res));
  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const capture = async (filename, clip = null) => {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await send('Page.captureScreenshot', params);
    const buf = Buffer.from(res.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(outPath, buf);
    console.log(`📸 Saved: ${filename}`);
  };

  const navigateTo = async (url) => {
    await new Promise((resolve) => {
      const loadHandler = (data) => {
        const parsed = JSON.parse(data.toString());
        if (parsed.method === 'Page.loadEventFired') {
          ws.off('message', loadHandler);
          resolve();
        }
      };
      ws.on('message', loadHandler);
      send('Page.navigate', { url });
    });
    await new Promise(r => setTimeout(r, 1600));
  };

  // 1. Desktop captures (1440x900)
  console.log('Capturing Desktop 1440px...');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
  await navigateTo(BASE_URL);

  // Capture Hero Title & Live badge card
  await capture('capture_desktop_hero_title_and_card.png');

  // Specific clip for Hero Title
  const titleBox = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('#hero-split-title');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.x - 20, y: r.y - 20, width: r.width + 40, height: r.height + 40, scale: 2 };
    })()`,
    returnByValue: true
  });
  if (titleBox?.result?.value) {
    await capture('capture_hero_title_desktop.png', titleBox.result.value);
  }

  // Specific clip for Live Badge in Hero card
  const badgeBox = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('#hero-app-referral-card');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: 180, scale: 2 };
    })()`,
    returnByValue: true
  });
  if (badgeBox?.result?.value) {
    await capture('capture_live_badge_hero.png', badgeBox.result.value);
  }

  // Scroll to 3D section and capture live badge
  await send('Runtime.evaluate', { expression: `
    const el = document.querySelector('#app-section');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo(0, top);
    }
  ` });
  await new Promise(r => setTimeout(r, 1200));
  await capture('capture_3d_section_live_badge.png');

  // 2. Mobile captures (390x844)
  console.log('Capturing Mobile 390px...');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await navigateTo(BASE_URL);

  // Capture Mobile Hero
  await capture('capture_hero_title_mobile.png');

  // Open mobile menu
  await send('Runtime.evaluate', { expression: `document.querySelector('#mobile-menu-toggle')?.click();` });
  await new Promise(r => setTimeout(r, 600));

  // Capture mobile menu open with accordion unfolded
  await capture('capture_mobile_menu_accordion_default_open.png');

  ws.close();
  chromeProc.kill('SIGKILL');
  console.log('--- All evidence captures saved successfully! ---');
}

main().catch(console.error);
