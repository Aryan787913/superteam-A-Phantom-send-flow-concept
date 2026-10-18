// Run with NODE_PATH pointing at an installed Playwright package.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const AxeBuilder = require('@axe-core/playwright').default;
(async () => {
 const browser = await chromium.launch({channel:'msedge',headless:true});
 const context = await browser.newContext();
 const page = await context.newPage();
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('net::ERR'))errors.push(m.text())});
 const root='http://127.0.0.1:8000/';
 const out=path.join(__dirname,'..','captures');fs.mkdirSync(out,{recursive:true});
 const states=['home','home-empty','token','recipient','warning','amount','review','failure','success','save'];
 let checked=0;
 for(const device of ['mobile','desktop'])for(const theme of ['dark','light'])for(const view of ['before','after']){
  await page.setViewportSize(device==='mobile'?{width:390,height:844}:{width:1440,height:900});
  for(const screen of view==='before'?Array.from({length:7},(_,i)=>`evidence-${i+1}`):states){
   await page.goto(`${root}?capture=1&screen=${screen}&view=${view}&device=${device}&theme=${theme}`);
   await page.evaluate(()=>document.fonts.ready);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`overflow ${device} ${theme} ${screen}`);
   if(view==='before')assert(await page.locator('.original').evaluate(i=>i.complete&&i.naturalWidth>0),'evidence image loads');
    assert.equal(await page.locator('#wallet').evaluate(e=>Math.round(e.getBoundingClientRect().width)),device==='mobile'?390:view==='before'?600:1120);
    if(view==='after'){
     assert(await page.locator('.app-main').evaluate(e=>e.scrollHeight<=e.clientHeight+2),`internal clipping ${device} ${theme} ${screen}`);
     assert(!/Add demo|Confirm demo|DEMO TRANSFER COMPLETE|Simulated success|Demo balance/.test(await page.locator('.wallet').innerText()),'capture demo wording');
     if(screen==='warning'){
      assert.equal(await page.locator('.fingerprint').count(),2);
      const labels=await page.locator('.fingerprint').evaluateAll(es=>es.map(e=>e.getAttribute('aria-label')));assert.notEqual(labels[0],labels[1]);
      assert(await page.locator('#hold-help').evaluate(e=>e.getBoundingClientRect().bottom<=document.querySelector('.app-main').getBoundingClientRect().bottom),'warning safety text visible');
     }
    }
   await page.screenshot({path:path.join(out,`${view}-${screen}-${device}-${theme}.png`)});checked++;
  }
 }
 for(const width of [360,390,768,1024,1440]){
  await page.setViewportSize({width,height:900});await page.goto(root);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`normal overflow ${width}`);
  assert.equal(await page.locator('.app-nav').evaluate(e=>getComputedStyle(e).flexDirection),width>=1024?'column':'row');
  assert.equal(await page.locator('.desktop-context .flow-steps').count(),0);
  assert.equal(await page.locator('.desktop-context .recent-contact .fingerprint').count(),3);
  assert((await page.locator('[data-action="settings"] path').getAttribute('d')).startsWith('m9 3-'));
 }
 await page.setViewportSize({width:1440,height:900});await page.goto(root);
 const act=a=>page.locator(`[data-action="${a}"]`).first().click();
 await act('token');assert(await page.getByText('No SOL yet',{exact:true}).isVisible());
 await act('fund-token');await act('choose-sol');
 await act('hidden');assert(await page.getByText('Illustrative filter, not a safety verdict',{exact:true}).isVisible());
  await act('paste-lookalike');assert(await page.locator('.address .diff').count()>0);
 await page.locator('#hold').click();assert(await page.locator('#hold').isVisible(),'single click must not bypass warning');
 await act('use-rahul');await page.locator('[data-amount="50"]').click();
 await page.locator('#amount-input').fill('5');await page.locator('[data-key="."]').click();await page.locator('[data-key="2"]').click();assert.equal(await page.locator('#amount-input').inputValue(),'5.2');await page.locator('[data-key="⌫"]').click();assert.equal(await page.locator('#amount-input').inputValue(),'5.');await page.locator('[data-amount="50"]').click();
 await act('unit');assert.equal(await page.locator('#amount-input').inputValue(),'0.00403226');await act('unit');
 await act('fee');assert(await page.getByText('A small payment in SOL',{exact:false}).isVisible());
 await page.locator('#amount-input').fill('0');await act('review-amount');assert(await page.locator('#amount-error').textContent());
 await page.locator('#amount-input').fill('620');await act('review-amount');assert(await page.getByText('0.050000 SOL (≈ ₹620.00)',{exact:false}).isVisible());
 await act('simulate-failure');await act('fix');assert(await page.getByText('≈ ₹620.00',{exact:true}).isVisible());
 await act('confirm');assert(await page.getByText('Simulated success',{exact:true}).isVisible());
 await act('details');assert(await page.getByText('DEMO RECEIPT · NOT AN ON-CHAIN TRANSACTION',{exact:true}).isVisible());
 await act('save');await act('save-contact');assert(await page.locator('#save-error').textContent());
 await page.locator('#verified').check();await act('save-contact');assert(await page.getByText('Simulated success',{exact:true}).isVisible());
 await page.locator('#picker').selectOption('recipient');await act('paste-new');await act('check-address');assert((await page.locator('.screen-content .card-title').textContent()).includes('New recipient'));
 await page.locator('#picker').selectOption('recipient');await act('paste-lookalike');
 await page.locator('#hold').focus();await page.keyboard.down('Space');await page.waitForTimeout(600);await page.keyboard.up('Space');assert(await page.locator('#hold').isVisible(),'short hold cancels');
 await page.keyboard.down('Enter');await page.waitForTimeout(2100);await page.keyboard.up('Enter');assert((await page.locator('.screen-content .card-title').textContent()).includes('Unverified recipient'));
 await page.locator('#picker').selectOption('failure');await act('add-sol');await act('confirm');assert(await page.getByText('Simulated success',{exact:true}).isVisible());
 await page.locator('#before').click();assert(await page.locator('.original').isVisible());await page.locator('#theme').click();await page.locator('#after').click();
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('button').first().evaluate(e=>getComputedStyle(e).transitionDuration),'0s');
 assert.deepEqual(errors,[]);
 const accessibility=[];
 for(const theme of ['dark','light'])for(const screen of states){
  await page.goto(`${root}?screen=${screen}&theme=${theme}`);
  const report=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  accessibility.push(...report.violations.map(v=>({theme,screen,id:v.id,nodes:v.nodes.map(n=>n.target)})));
 }
 assert.deepEqual(accessibility,[]);
 for(const theme of ['dark','light']){
  await page.setViewportSize({width:390,height:844});await page.goto(`${root}?theme=${theme}`);
  await act('fund');await page.getByRole('button',{name:'Send',exact:true}).first().click();await act('choose-sol');await act('paste-lookalike');await act('use-rahul');
  await page.locator('[data-amount="50"]').click();await act('review-amount');await act('simulate-failure');await act('fix');await act('confirm');
  assert(await page.getByText('Simulated success',{exact:true}).isVisible());await act('save');await page.locator('#verified').check();await act('save-contact');
 }
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({captureStatesChecked:checked,normalWidths:[360,390,768,1024,1440],flow:'passed',consoleErrors:errors,screenshotDirectory:out},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
