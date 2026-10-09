(() => {
 document.querySelectorAll('[data-spacing]').forEach(button=>button.addEventListener('click',()=>{
  document.getElementById('spacing-demo').classList.toggle('compact',button.dataset.spacing==='compact');
  document.querySelectorAll('[data-spacing]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 }));
 document.querySelectorAll('[data-palette]').forEach(button=>button.addEventListener('click',()=>{
  const name=button.dataset.palette;document.getElementById('palette-demo').dataset.theme=name;
  document.querySelector('.palette-label').textContent={navy:'纸白 + 藏蓝 + 浅粉',green:'暖白 + 深绿 + 浅绿',mono:'纸白 + 墨黑 + 灰色'}[name];
  document.querySelectorAll('[data-palette]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 }));
 const steps=[
 {kicker:'先把问题看清',title:'材料散在哪里？<br>谁会用到它们？',copy:'列出资料类型、使用场景和查找路径。<br>先知道大家怎样找材料，再决定怎么整理。',evidence:'访谈记录 / 资料清单 / 原始截图'},
 {kicker:'做一次小范围尝试',title:'先整理一组材料，<br>请使用者找一找。',copy:'试着按阶段命名和归档。<br>让别人实际用一次，记录哪里容易误解。',evidence:'第一版目录 / 操作记录 / 使用反馈'},
 {kicker:'把修改也留下',title:'哪里找得顺？<br>哪里还要改？',copy:'根据反馈调整标题、分类和命名。<br>留下前后版本，让别人能核对这次改动。',evidence:'版本对照 / 修改说明 / 待解决事项'}
 ];
 const tabs=[...document.querySelectorAll('[data-step]')];
 function select(button,focus=false){
  const step=steps[Number(button.dataset.step)];
  tabs.forEach(b=>{b.setAttribute('aria-selected',String(b===button));b.tabIndex=b===button?0:-1});
  document.getElementById('process-panel').setAttribute('aria-labelledby',button.id);
  document.getElementById('process-kicker').textContent=step.kicker;document.getElementById('process-title').innerHTML=step.title;
  document.getElementById('process-copy').innerHTML=step.copy;document.getElementById('process-evidence').textContent=step.evidence;
  if(focus)button.focus();
 }
 tabs.forEach((button,index)=>{button.addEventListener('click',()=>select(button));button.addEventListener('keydown',e=>{
  let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();select(tabs[next],true);
 });});
 document.querySelector('.example-contact')?.addEventListener('click',e=>{const b=e.currentTarget;const box=document.getElementById('contact-demo');box.hidden=!box.hidden;b.setAttribute('aria-expanded',String(!box.hidden));});
})();
