const mobMenu = document.querySelector('#about-mob-menu-btn');
const closeBtn = document.querySelector('#about-close-btn');

mobMenu.addEventListener('click', () => {
  document.querySelector('#mob-navigation').classList.add('open-mob-navigation');
});

closeBtn.addEventListener('click', () => {
  document.querySelector('#mob-navigation').classList.remove('open-mob-navigation');
});