const {chromium}=require('playwright');
const AxeBuilder=require('@axe-core/playwright').default;
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const sharp=require('sharp');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({viewport:{width:2160,height:1320},deviceScaleFactor:2});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8000/boards/boards.html');
 await page.evaluate(()=>document.fonts.ready);
 await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
 const boards=page.locator('.board');assert.equal(await boards.count(),7);
 const output=path.join(__dirname,'export');fs.mkdirSync(output,{recursive:true});
 const webp=path.join(__dirname,'export-webp');fs.mkdirSync(webp,{recursive:true});
 const results=[];
 for(let i=0;i<7;i++){
  const board=boards.nth(i),id=await board.getAttribute('id');
  if(process.argv[2]&&process.argv[2]!==id)continue;
  const issues=await board.evaluate(b=>{
   const br=b.getBoundingClientRect(),bad=[];
   for(const e of b.querySelectorAll('*')){
    const r=e.getBoundingClientRect();
    if(r.width&&r.height&&(r.left<br.left-1||r.right>br.right+1||r.top<br.top-1||r.bottom>br.bottom+1))bad.push({type:'board overflow',element:e.className,text:e.textContent.slice(0,70)});
    if(!e.matches('img,svg,.anno')&&e.clientWidth&&e.scrollWidth>e.clientWidth+2)bad.push({type:'horizontal overflow',element:e.className});
   }
   const footer=b.querySelector('.foot').getBoundingClientRect();
   for(const e of b.querySelectorAll('p,h1,h2,h3,td,th,.note,.caption,.shot')){const r=e.getBoundingClientRect();if(r.bottom>footer.top-12)bad.push({type:'footer collision',element:e.className,text:e.textContent.slice(0,70)})}
   const walker=document.createTreeWalker(b,NodeFilter.SHOW_TEXT);
   while(walker.nextNode()){
    const node=walker.currentNode;if(!node.textContent.trim())continue;
    const range=document.createRange();range.selectNodeContents(node);
    for(const rect of range.getClientRects()){
     let parent=node.parentElement;
     while(parent&&parent!==b.parentElement){
      const style=getComputedStyle(parent),bounds=parent.getBoundingClientRect();
      if(['hidden','clip'].includes(style.overflowX)&&(rect.left<bounds.left-1||rect.right>bounds.right+1))bad.push({type:'clipped text horizontally',text:node.textContent.slice(0,70)});
      if(['hidden','clip'].includes(style.overflowY)&&(rect.top<bounds.top-1||rect.bottom>bounds.bottom+1))bad.push({type:'clipped text vertically',text:node.textContent.slice(0,70)});
      parent=parent.parentElement;
     }
    }
   }
   return bad;
  });
  assert.deepEqual(issues,[],id);
  assert(!/\bdemo\b/i.test(await board.innerText()),'No demo wording: '+id);
  assert.deepEqual(await board.evaluate(e=>({w:e.offsetWidth,h:e.offsetHeight})),{w:1920,h:1080});
  await board.screenshot({path:path.join(output,id+'.png'),scale:'device'});
  const png=fs.readFileSync(path.join(output,id+'.png'));assert.equal(png.readUInt32BE(16),3840);assert.equal(png.readUInt32BE(20),2160);
  await sharp(png).resize(1920,1080).webp({quality:92}).toFile(path.join(webp,id+'.webp'));
  results.push(id+'.png');
 }
 const audit=await new AxeBuilder({page}).withRules(['color-contrast']).analyze();
 assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[]);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({exported:results,resolution:'3840x2160',bounds:'passed',contrast:'passed',errors},null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
