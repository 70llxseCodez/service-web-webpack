export const burgerMenu = () => {
  const burger = document.querySelector('.header__burger');
  const navbar = document.querySelector('.navbar');
  const closeBtn = document.querySelector('.navbar__close-btn');
  const transparentWrapp = document.querySelector(
    '.navbar__background-translucent'
  );
  burger.addEventListener('click', () => {
    navbar.classList.add('navbar-active');
    transparentWrapp.classList.add('navbar__background-translucent-active');
  });
  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('navbar-active');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
  });
};
