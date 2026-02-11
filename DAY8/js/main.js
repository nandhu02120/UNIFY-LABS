// Minimal JS: enhance contact form submission for demo (no external deps)
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    if(!form.checkValidity()) return; // let HTML5 show validation
    e.preventDefault();
    // minimal success feedback
    const btn = form.querySelector('button[type="submit"]');
    const old = btn.innerHTML;
    btn.innerHTML = 'Sent ✓';
    btn.disabled = true;
    setTimeout(()=>{btn.innerHTML = old; btn.disabled = false; form.reset()}, 1400);
  });
});
