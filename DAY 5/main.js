// Mobile nav toggle and reveal-on-scroll
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  navToggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
  // Close nav on link click (mobile)
  document.querySelectorAll('#site-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

  // Reveal on scroll (IntersectionObserver)
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    })
  },{threshold:0.12});
  document.querySelectorAll('.reveal-up').forEach(el=>observer.observe(el));
});
