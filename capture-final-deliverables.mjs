import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const BASE_URL = 'http://localhost/MakertingMBSARL/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const debugPort = 9455;
  const tempProfile = path.join(process.cwd(), '.chrome-temp-captures-' + Date.now());

  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${tempProfile}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--mute-audio',
    'about:blank'
  ], { detached: false });

  let wsUrl = null;
  for (let i = 0; i < 35; i++) {
    try {
      const listRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
      if (listRes.ok) {
        const tabs = await listRes.json();
        const pageTab = tabs.find(t => t.type === 'page');
        if (pageTab && pageTab.webSocketDebuggerUrl) {
          wsUrl = pageTab.webSocketDebuggerUrl;
          break;
        }
      }
    } catch (e) {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!wsUrl) throw new Error('Chrome WS not found');

  const { WebSocket } = await import('ws');
  const ws = new WebSocket(wsUrl);

  let msgId = 1;
  const send = (method, params = {}) => new Promise((res) => {
    const id = msgId++;
    const handler = (data) => {
      const parsed = JSON.parse(data.toString());
      if (parsed.id === id) {
        ws.off('message', handler);
        res(parsed.result);
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
    console.log(`Saved screenshot: ${outPath} (${buf.length} bytes)`);
  };

  const evaluate = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return res?.result?.value;
  };

  // 1. Desktop 1440px - Hero Referral Card
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 950, deviceScaleFactor: 2, mobile: false });
  await new Promise((resolve) => {
    const loadHandler = (data) => {
      const parsed = JSON.parse(data.toString());
      if (parsed.method === 'Page.loadEventFired') {
        ws.off('message', loadHandler);
        resolve();
      }
    };
    ws.on('message', loadHandler);
    send('Page.navigate', { url: BASE_URL });
  });
  await new Promise(r => setTimeout(r, 2000));
  await capture('capture_desktop_hero_referral_1440.png');

  // 2. Tablet 1024px - Mega Menu Open via Touch
  await send('Emulation.setDeviceMetricsOverride', { width: 1024, height: 768, deviceScaleFactor: 2, mobile: false });
  await evaluate(`document.querySelector('#desktop-services-trigger').click();`);
  await new Promise(r => setTimeout(r, 600));
  await capture('capture_tablet_megamenu_open_1024.png');

  // 3. Mobile 360px - Accordion Closed
  await send('Emulation.setDeviceMetricsOverride', { width: 360, height: 780, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: BASE_URL });
  await new Promise(r => setTimeout(r, 1500));
  await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
  await new Promise(r => setTimeout(r, 500));
  await capture('capture_mobile_menu_closed_360.png');

  // 4. Mobile 360px - Accordion Open
  await evaluate(`document.querySelector('#mobile-services-accordion-toggle').click();`);
  await new Promise(r => setTimeout(r, 500));
  await capture('capture_mobile_accordion_open_360.png');

  // 5. Mobile 360px - Hero Referral Card in viewport
  await evaluate(`
    document.querySelector('#mobile-menu-close').click();
  `);
  await new Promise(r => setTimeout(r, 400));
  await evaluate(`
    const card = document.getElementById('hero-app-referral-card');
    if (card) card.scrollIntoView({ behavior: 'instant', block: 'center' });
  `);
  await new Promise(r => setTimeout(r, 600));
  await capture('capture_mobile_hero_referral_360.png');

  ws.close();
  try { chromeProc.kill(); } catch (e) {}
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  console.log('Toutes les captures ont été générées avec succès !');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
