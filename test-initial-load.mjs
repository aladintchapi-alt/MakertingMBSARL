import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { WebSocket } from 'ws';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const debugPort = 9495;
const tempProfile = path.join(process.cwd(), '.chrome-temp-menu-diag');

const chromeProc = spawn(CHROME_PATH, [
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${tempProfile}`,
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  'about:blank'
]);

let wsUrl = null;
for (let i = 0; i < 30; i++) {
  try {
    const listRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
    if (listRes.ok) {
      const tabs = await listRes.json();
      const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
      if (pageTab && pageTab.webSocketDebuggerUrl) {
        wsUrl = pageTab.webSocketDebuggerUrl;
        break;
      }
    }
  } catch (e) {}
  await new Promise(r => setTimeout(r, 200));
}

if (!wsUrl) throw new Error('Connexion Chrome impossible sur le port ' + debugPort);
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
await send('Page.enable');
await send('Runtime.enable');

const consoleEntries = [];
ws.on('message', d => {
  try {
    const p = JSON.parse(d.toString());
    if (p.method === 'Runtime.consoleAPICalled') {
      consoleEntries.push({
        type: p.params.type,
        text: p.params.args.map(a => a.value || a.description).join(' ')
      });
    }
    if (p.method === 'Runtime.exceptionThrown') {
      consoleEntries.push({
        type: 'EXCEPTION',
        text: p.params.exceptionDetails?.exception?.description || p.params.exceptionDetails?.text
      });
    }
  } catch (e) {}
});

await send('Emulation.setDeviceMetricsOverride', { width: 417, height: 844, deviceScaleFactor: 2, mobile: true });

await new Promise((resolve) => {
  const loadHandler = (data) => {
    const parsed = JSON.parse(data.toString());
    if (parsed.method === 'Page.loadEventFired') {
      ws.off('message', loadHandler);
      resolve();
    }
  };
  ws.on('message', loadHandler);
  send('Page.navigate', { url: 'http://localhost/MakertingMBSARL/' });
});
await new Promise(r => setTimeout(r, 2000));

const inspectRes = await send('Runtime.evaluate', {
  expression: `(() => {
    const overlay = document.querySelector("#mobile-menu-overlay");
    const burger = document.querySelector("#mobile-menu-toggle");
    const close = document.querySelector("#mobile-menu-close");
    const cs = overlay ? window.getComputedStyle(overlay) : null;
    return JSON.stringify({
      hasHiddenClass: overlay ? overlay.classList.contains("hidden") : null,
      display: cs ? cs.display : null,
      visibility: cs ? cs.visibility : null,
      opacity: cs ? cs.opacity : null,
      zIndex: cs ? cs.zIndex : null,
      burgerClass: burger ? burger.className : null,
      closeExists: Boolean(close),
      bodyStyle: document.body.getAttribute("style"),
      localStorageData: Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])),
      sessionStorageData: Object.fromEntries(Object.keys(sessionStorage).map(k => [k, sessionStorage.getItem(k)]))
    }, null, 2);
  })()`,
  returnByValue: true
});

console.log('--- DOM INSPECT INITIAL LOAD ---');
console.log(inspectRes.result.value);
console.log('--- CONSOLE ENTRIES INITIAL LOAD ---');
console.log(JSON.stringify(consoleEntries, null, 2));

ws.close();
chromeProc.kill();
try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
