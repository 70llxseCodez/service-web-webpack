const descrption = document.querySelector('.main__description-text');
const descrMore = document.querySelector('.main__decription-text-more');
const mainBtnMore = document.querySelector('.main__button');
const mainBtnMoreText = document.querySelector('.main__button-text');
const mainBtnMoreImg = document.querySelector('.main__button-img');

function desc() {
  if (window.innerWidth >= 1220) {
    return (descrption.textContent =
      'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. по ремонту техники Dell. Только у нас вы можете отремонтировать свой. Только у нас вы можете ');
  } else
    return (descrption.textContent =
      'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.');
}

window.addEventListener('resize', desc);

let clicked = true;
mainBtnMore.addEventListener('click', () => {
  if (clicked) {
    descrMore.style = `display:block`;
    clicked = !clicked;
    mainBtnMoreText.textContent = 'скрыть';
    mainBtnMoreImg.style.transform = 'rotate(180deg)';
  } else {
    clicked = !clicked;
    descrMore.style = 'display:none';
    mainBtnMoreText.textContent = 'Показать все';
    mainBtnMoreImg.style.transform = 'rotate(0deg)';
  }
});
