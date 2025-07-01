document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('popup-close');

  function showPopup() {
    popup.classList.remove('opacity-0', 'pointer-events-none');
    popup.classList.add('opacity-100');
  }

  function hidePopup() {
    popup.classList.remove('opacity-100');
    popup.classList.add('opacity-0', 'pointer-events-none');
  }

  setTimeout(showPopup, 5000);

  closeBtn.addEventListener('click', () => {
    hidePopup();
  });
});
