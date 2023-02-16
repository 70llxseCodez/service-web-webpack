const showCardBtn = document.querySelector('.brands__button-show-item');
const nonedCards = document.querySelectorAll('.brands__none-item');
const btnShowCardsBtnImg = document.querySelector(
  '.brands__button-show-item-img'
);
const btnShowCardsBtnText = document.querySelector(
  '.brands__button-show-item-text'
);

// eslint-disable-next-line no-unused-vars
let clicked = true;

showCardBtn.addEventListener('click', () => {
  if (clicked) {
    clicked = !clicked;
    btnShowCardsBtnImg.style = 'transform: rotate(180deg)';
    btnShowCardsBtnText.textContent = 'скрыть';
    for (let i = 0; i < nonedCards.length; i++) {
      nonedCards[i].style = `display:flex !important`;
    }
  } else {
    for (let i = 0; i < nonedCards.length; i++) {
      nonedCards[i].style = `display:none !important`;
    }
    clicked = !clicked;
    btnShowCardsBtnImg.style = 'transform: rotate(0deg)';
    btnShowCardsBtnText.textContent = 'Показать все';
  }
});
