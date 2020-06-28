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



//валидация введенных данных и отправка формы
var inputSurnameElement = document.querySelector('.form-name__input--surname');
var inputNameElement = document.querySelector('.form-name__input--name');
// var inputPhoneElement = document.querySelector('.form-contacts__input--phone');
var inputEmailElement = document.querySelector('.form-contacts__input--email');
var modalOverlay = document.querySelector('.modal-overlay');
var formContest = document.querySelector('.contest__form');
var modalError = document.querySelector('.modal-bad');
var modalErrorButton = document.querySelector('.modal-bad__btn');
var modalRequest = document.querySelector('.modal-request');
var modalRequestButton = document.querySelector('.modal-request__btn');
var ESC_KEYCODE = 27;


var modalRequestShow = function() {
  modalRequest.classList.add('modal--show');
}

var modalRequestClose = function() {
  modalRequest.classList.remove('modal--show');
}

var modalErrorShow = function() {
  modalError.classList.add('modal--show');
}

var modalErrorClose = function() {
  modalError.classList.remove('modal--show');
}

var overlayShow = function() {
  modalOverlay.classList.add('modal--show');
}

var overlayRemove = function() {
  modalOverlay.classList.remove('modal--show');
}

var validateForm = function(elem1, elem2, elem3) {
  if (elem1.value === '') {
    elem1.style.borderColor = '#ff0000';
    modalErrorShow();
  } else {
    elem1.style.borderColor = '#e5e5e5';
  }

 if (elem2.value === '') {
    elem2.style.borderColor = '#ff0000';
    modalErrorShow();
  } else {
    elem2.style.borderColor = '#e5e5e5';
  }

  if (elem3.value === '') {
    elem3.style.borderColor = '#ff0000';
    modalErrorShow();
  } else {
    elem3.style.borderColor = '#e5e5e5';
  }

 if (elem1.value !== '' && elem2.value !== '' && elem3.value !== '') {
    modalRequestShow();
  }
};

// отправка формы
formContest.addEventListener('submit', function(evt) {
  evt.preventDefault();
  overlayShow();
  validateForm(inputSurnameElement, inputNameElement, inputEmailElement);
});

modalErrorButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalErrorClose();
  overlayRemove();
});

modalRequestButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalRequestClose();
  overlayRemove();
  formContest.reset();
})

// закрытие по клику на оверлей
var overlayClickHandler = function(popup) {
  modalOverlay.addEventListener('click', function() {
    if (popup === modalRequest) {
    popup.classList.remove('modal--show');
    overlayRemove();
    formContest.reset();
  } else {
    popup.classList.remove('modal--show');
    overlayRemove();
  }
  });
};

overlayClickHandler(modalError);
overlayClickHandler(modalRequest);

// закрытие по ESC
window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (modalError.classList.contains('modal--show')) {
      evt.preventDefault();
      modalErrorClose();
      overlayRemove();
    }
    if (modalRequest.classList.contains('modal--show')) {
      evt.preventDefault();
      modalRequestClose();
      overlayRemove();
      formContest.reset();
    }
  }
});


