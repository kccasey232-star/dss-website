
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if(toggle && drawer){
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  document.querySelectorAll('.dropdown > button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dd = btn.closest('.dropdown');
      dd.classList.toggle('open');
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.dropdown.open').forEach(dd => {
      if(!dd.contains(e.target)) dd.classList.remove('open');
    });
  });
})();
