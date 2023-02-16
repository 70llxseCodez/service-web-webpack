const repairNonedCards = document.querySelectorAll('.repair-device__item-none');
const showNoneCardsBtn = document.querySelector(
  '.repair-device__button-show-item'
);
const repairBtnImg = document.querySelector(
  '.repair-device__button-show-item-img'
);
const repairBtnText = document.querySelector(
  '.repair-device__button-show-item-text'
);

let clicked = true;

showNoneCardsBtn.addEventListener('click', () => {
  if (clicked) {
    clicked = !clicked;
    for (let i = 0; i < repairNonedCards.length; i++) {
      repairNonedCards[i].style = 'display:flex !important';
    }
    repairBtnImg.style.transform = 'rotate(180deg)';
    repairBtnText.textContent = 'скрыть';
  } else {
    for (let i = 0; i < repairNonedCards.length; i++) {
      repairNonedCards[i].style = 'display:none !important';
    }
    clicked = !clicked;
    repairBtnText.textContent = 'Показать все';
    repairBtnImg.style.transform = 'rotate(0deg)';
  }
});
