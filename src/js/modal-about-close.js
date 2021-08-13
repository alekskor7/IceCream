(() => {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-about-icon-close]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
       refs.modal.classList.toggle('is-hidden');
  }
})();