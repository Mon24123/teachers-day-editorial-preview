(() => {
  const labels = ['点击，看清这一份认真','点击，让目光从容回应','点击，看见每一份成长'];
  document.querySelectorAll('.focus-toggle').forEach((button,index) => {
    button.addEventListener('click', () => {
      const scene=button.closest('.vision-scene');
      const clear=scene.classList.toggle('is-clear');
      button.setAttribute('aria-pressed',String(clear));
      button.querySelector('span').textContent=clear?'已切换清晰视野 · 点击复原':labels[index];
      scene.querySelector('.scene-caption').textContent=clear?'视觉概念示意 · 非实际镜片效果':'点击眼镜，切换视觉示意';
    });
  });
  const progress=document.getElementById('progress'),percent=document.getElementById('percent');
  if(progress){
    let pending=false;
    const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;const value=max>0?Math.max(0,Math.min(100,scrollY/max*100)):100;progress.style.height=`${value}%`;percent.textContent=`${Math.round(value)}%`;pending=false;};
    addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update();
  }
  document.getElementById('print')?.addEventListener('click',()=>window.print());
})();
