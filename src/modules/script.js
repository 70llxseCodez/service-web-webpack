const transparentWrapp = document.querySelector(
  '.navbar__background-translucent'
);

export const burgerMenu = () => {
  const burger = document.querySelector('.header__burger');
  const navbar = document.querySelector('.navbar');
  const closeBtn = document.querySelector('.navbar__close-btn');

  burger.addEventListener('click', () => {
    navbar.classList.add('navbar-active');
    transparentWrapp.classList.add('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'hidden';
  });
  closeBtn.addEventListener('click', () => {
    navbar.classList.remove('navbar-active');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'visible';
  });
};

//feedback

export const feedback = () => {
  const btnFeedback = document.querySelectorAll('.open-feedback-btn');
  const feedbackBlock = document.querySelector('.feedback');
  const btnCloseFeedback = document.querySelector('.feedback__close-btn-img');

  btnFeedback[0].addEventListener('click', () => {
    feedbackBlock.classList.add('open-feedback');
    transparentWrapp.classList.add('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'hidden';
  });

  btnCloseFeedback.addEventListener('click', () => {
    feedbackBlock.classList.remove('open-feedback');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'visible';
  });
  btnFeedback[1].addEventListener('click', () => {
    feedbackBlock.classList.add('open-feedback');
    transparentWrapp.classList.add('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'hidden';
  });

  btnCloseFeedback.addEventListener('click', () => {
    feedbackBlock.classList.remove('open-feedback');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'visible';
  });
};

export const repairbar = () => {
  const btnFeedback = document.querySelectorAll('.open-repairbar-btn');
  const repairbackBlock = document.querySelector('.repairbar');
  const btnCloseFeedback = document.querySelector('.repairbar__close-btn-img');

  btnFeedback[0].addEventListener('click', () => {
    repairbackBlock.classList.add('open-repairbar');
    transparentWrapp.classList.add('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'hidden';
  });

  btnCloseFeedback.addEventListener('click', () => {
    repairbackBlock.classList.remove('open-repairbar');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'visible';
  });
  btnFeedback[1].addEventListener('click', () => {
    repairbackBlock.classList.add('open-repairbar');
    transparentWrapp.classList.add('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'hidden';
  });

  btnCloseFeedback.addEventListener('click', () => {
    repairbackBlock.classList.remove('open-repairbar');
    transparentWrapp.classList.remove('navbar__background-translucent-active');
    document.querySelector('html').style.overflowY = 'visible';
  });
};

export const closeAllBar = () => {
  const repairbackBlock = document.querySelector('.repairbar');
  const feedbackBlock = document.querySelector('.feedback');
  const navbar = document.querySelector('.navbar');

  transparentWrapp.addEventListener('click', () => {
    repairbackBlock.classList.remove('open-repairbar');
    feedbackBlock.classList.remove('open-feedback');
    navbar.classList.remove('navbar-active');

    transparentWrapp.classList.remove('navbar__background-translucent-active');
  });
};
