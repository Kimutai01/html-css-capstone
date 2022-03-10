const seeMoreBtn = document.querySelector('#players-see-more-btn');
const hide = document.querySelector('#hiddenInfo2');
const hide2 = document.querySelector('#hiddenInfo3');
const hide3 = document.querySelector('#hiddenInfo4');
const hide4 = document.querySelector('#hiddenInfo5');
const btnTxtMore = document.querySelector('#players-see-more-btn');

seeMoreBtn.addEventListener('click', () => {
  hide.classList.add('open');
  hide2.classList.add('open');
  hide3.classList.add('open');
  hide4.classList.add('open');
  btnTxtMore.style.display = 'none';
});
