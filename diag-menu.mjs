import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { WebSocket } from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const debugPort = 9489;
const tempProfile = path.join(process.cwd(), '.chrome-temp-diag');

const chromeProc = spawn(CHROME_PATH, [
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${tempProfile}`,
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));
const listRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
const tabs = await listRes.json();
const wsUrl = tabs[0].webSocketDebuggerUrl;
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

await new Promise(r => ws.on('open', r));
await send('Emulation.setDeviceMetricsOverride', {
  width: 360,
  height: 640,
  deviceScaleFactor: 2,
  mobile: true
});
await send('Page.navigate', { url: 'http://localhost/MakertingMBSARL/' });
await new Promise(r => setTimeout(r, 3000));

const clickRes = await send('Runtime.evaluate', {
  expression: `(() => {
    const btn = document.querySelector("#mobile-menu-toggle");
    if (!btn) return "NO_TOGGLE_BUTTON";
    btn.click();
    return "CLICKED";
  })()`
});
console.log('Toggle click:', clickRes);
await new Promise(r => setTimeout(r, 600));

await send('Runtime.evaluate', {
  expression: `(() => {
    const at = document.querySelector("#mobile-services-accordion-toggle");
    if (at) at.click();
  })()`
});
await new Promise(r => setTimeout(r, 500));

const debugInfo = await send('Runtime.evaluate', {
  expression: `(() => {
    const h = document.querySelector("#mobile-menu-header");
    const sc = document.querySelector("#mobile-menu-scroll-container");
    const lastItem = sc ? sc.querySelector('a[href="https://apps.multibusiness.cm/locataire"]') : null;
    if (sc) sc.scrollTop = sc.scrollHeight;
    const hr = h ? h.getBoundingClientRect() : null;
    const lr = lastItem ? lastItem.getBoundingClientRect() : null;
    const scr = sc ? sc.getBoundingClientRect() : null;
    return JSON.stringify({
      headerRect: hr,
      lastItemRect: lr,
      scRect: scr,
      scScrollTop: sc ? sc.scrollTop : null,
      scScrollHeight: sc ? sc.scrollHeight : null,
      scClientHeight: sc ? sc.clientHeight : null,
      winH: window.innerHeight,
      winW: window.innerWidth,
      bodyStyleTop: document.body.style.top,
      bodyPosition: document.body.style.position
    }, null, 2);
  })()`,
  returnByValue: true
});

console.log('--- DIAGNOSTIC RESULTS ---');
console.log(debugInfo.result.value);

ws.close();
chromeProc.kill();
try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
