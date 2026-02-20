// Minimal, accessible modal handling
(function(){
  const btn = document.getElementById('notifyBtn');
  const modal = document.getElementById('modal');
  const overlay = modal.querySelector('.modal__overlay');
  const closeButtons = modal.querySelectorAll('[data-close], .modal__close');
  const form = document.getElementById('notifyForm');
  const main = document.getElementById('main');
  const announce = document.getElementById('announce');
  let lastFocus = null;
  let trapHandler = null;

  function setAriaOpen(open){
    modal.setAttribute('aria-hidden', open ? 'false' : 'true');
    if(main) main.setAttribute('aria-hidden', open ? 'true' : 'false');
    modal.style.pointerEvents = open ? 'auto' : 'none';
    document.body.style.overflow = open ? 'hidden' : '';
  }

  function getFocusable(container){
    return Array.from(container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }

  function trapFocus(e){
    if(e.key !== 'Tab') return;
    const focusables = getFocusable(modal);
    if(focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if(e.shiftKey){ if(document.activeElement === first){ e.preventDefault(); last.focus(); } }
    else { if(document.activeElement === last){ e.preventDefault(); first.focus(); } }
  }

  function openModal(){
    lastFocus = document.activeElement;
    setAriaOpen(true);
    // focus email input if available
    const email = modal.querySelector('#email');
    (email || modal.querySelector('.modal__close') || modal).focus();
    // attach focus trap
    trapHandler = trapFocus;
    document.addEventListener('keydown', trapHandler);
    announce && (announce.textContent = 'Subscription dialog opened');
  }

  function closeModal(){
    setAriaOpen(false);
    // remove trap
    if(trapHandler) document.removeEventListener('keydown', trapHandler);
    if(lastFocus) lastFocus.focus();
    announce && (announce.textContent = 'Subscription dialog closed');
  }

  btn.addEventListener('click', openModal);

  closeButtons.forEach(b => b.addEventListener('click', (e)=>{ e.preventDefault(); closeModal(); }));

  overlay.addEventListener('click',(e)=>{ if(e.target === overlay){ closeModal(); }});

  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = form.email.value.trim();
    if(!email) return;
    // in production you'd POST to server. Here show a quick thanks state and announce it.
    form.innerHTML = `<p>Thanks — we'll email <strong>${email}</strong> when we launch.</p><div class="modal__actions"><button class="btn" data-close>Close</button></div>`;
    const newClose = modal.querySelector('[data-close]');
    if(newClose) newClose.focus();
    announce && (announce.textContent = `Subscription saved for ${email}`);
  });

})();
