(() => {
  const labels = ['点击戴上万里路','点击戴上万里路','点击戴上万里路'];
  document.querySelectorAll('.focus-toggle').forEach((button,index) => {
    button.addEventListener('click', () => {
      const scene=button.closest('.vision-scene');
      const clear=scene.classList.toggle('is-clear');
      button.setAttribute('aria-pressed',String(clear));
      button.querySelector('span').textContent=clear?'点击摘下眼镜':(labels[index]||'点击戴上万里路');
      const caption=scene.querySelector('.scene-caption');if(caption)caption.textContent=clear?'点击眼镜可复原':'点击眼镜看看';
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
