
  AOS.init();


  const windowModalElements = document.querySelectorAll('[data-modal-window]');



  document.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-modal-button')) {
      windowModalElements.forEach(modal => {
        if (
          modal.getAttribute('data-modal-window')
          ===
          e.target.getAttribute('data-modal-button')
        ) {
          modal.classList.toggle('opened')
        }
      });
    }
  
    if (e.target.getAttribute('data-modal-close')) {
      e.target.closest('[data-modal-window]').classList.toggle('opened')
    }
  
   
  });