//мобильное меню
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var pageHeaderLogo = document.querySelector('.page-header__logo');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      pageHeaderLogo.classList.add('page-header__logo--open');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      pageHeaderLogo.classList.remove('page-header__logo--open');
    }
  });
