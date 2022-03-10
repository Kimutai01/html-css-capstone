const mobMenu = document.querySelector('#mob-menu-btn');
const closeBtn = document.querySelector('#close-btn');
const wrapper = document.querySelector('main');

mobMenu.addEventListener('click', () => {
  document.querySelector('#mob-navigation').classList.add('open-mob-navigation');
  wrapper.style.filter = 'blur(8px)';
});

closeBtn.addEventListener('click', () => {
  document.querySelector('#mob-navigation').classList.remove('open-mob-navigation');
  wrapper.style.filter = 'none';
});