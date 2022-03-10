const overlay = document.querySelector('#mobile-menu-navigation');
const popupOverlay = document.querySelector('.overlay-content');
const closeButton = document.querySelector('.close-btn');
const openButton = document.querySelector('.hamburger');

openButton.addEventListener('click', () => {
  popupOverlay.style.display = 'block';
  overlay.style.width = '100%';
});

closeButton.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
  overlay.style.width = '0%';
});
