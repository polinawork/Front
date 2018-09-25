//// overlay
var overlay = $('<div class="modal-backdrop modal-backdrop--header fade show"></div>');

(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(function(){
  $('.your-checkbox').prop('indeterminate', true);
})

$(function () {
  $('.geostation-modal__alert_btns-btn') .click(function () {
    $('.geostation-modal__alert').hide();
  });
})

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

$(function () {
  $('.hamburger') .click(function () {
    $('.nav-adaptive').toggleClass('d-block');
  });

  $('.btn-eye').click(function() {
   var type;
   $(this).siblings('#password-sign-in').attr('type') === 'password' ? type='text' : type='password';
   $('#password-sign-in').prop('type', type);
  });

  $('.btn-eye').click(function() {
   var type;
   $(this).siblings('#password-sign-out').attr('type') === 'password' ? type='text' : type='password';
   $('#password-sign-out').prop('type', type);
  });
})



//// геолокация
// активный город
$('.geostation-modal__list_item').click(function () {
  $('.geostation-modal__list_item').removeClass('link-active');
  $(this).addClass('link-active');
});

// поле ввода. Если начали ввод
$('.search-input').on("keyup keypress blue", function () {
  if($(this).val().length > 0) {
    $('.delete-search').addClass('d-block');
  } else {
    $('.delete-search').removeClass('d-block');
  }
});

if($(window).width() < 767)
{
   $('.search-input').on("keyup keypress blue", function () {
    if($(this).val().length > 0) {
      $('.header__center-search_btn').addClass('d-block');
    } else {
      $('.header__center-search_btn').removeClass('d-block');
    }
  });

   $('.delete-search').click(function(){
    // скрываем элемент
    $('.header__center-search_btn').removeClass('d-block');
  });
}



// клик по кнопке очистить
$('.delete-search').click(function(){
  // скрываем элемент
  $('.delete-search').removeClass('d-block');
  // очищаем поле
  $('.search-input').val("");
});

// показ окна города
function showCity() {
  $('.geostation-modal__alert').show();
}
setTimeout(showCity, 2000);

//// Валидация форм
// email
$('.form-input-email').on("keyup",function() {
  if ($(this).val() != '') {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (pattern.test($(this).val())) {
      $(this).addClass('form-control--confirm');
    } else {
      $(this).removeClass('form-control--confirm');
    }
  }
});
// поле с текстом
$('.form-input-any').on("keyup", function(event) {
  if ($(this).val().length > 0) {
    $(this).addClass('form-control--confirm');
    $(this).removeClass('form-control--error');
  } else if($(this).val().length === 0) {
    $(this).removeClass('form-control--confirm');
    $(this).addClass('form-control--error');
  }
});
// поле с телефоном
$(".form-input-phone").on("keypress keyup blur", function(event) {
  $(this).val($(this).val().replace(/[^\d].+/, ""));
  if ((event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
  if ($(this).val().length > 5) {
    $(this).addClass('form-control--confirm');
    $(this).removeClass('form-control--error');
  } else if ($(this).val().length === 0) {
    $(this).removeClass('form-control--confirm');
    $(this).addClass('form-control--error');
  }
});

//// Модальное окно логин
// клик по Получить пароль
;$(function(){
  $('#get-password').click(function () {
    if ( $('.form-forgot .form-input-email').hasClass('form-control--confirm') ) {
      $(this).closest('.modal').find('.modal-window__form').hide();
      $(this).closest('.modal').find('.modal-window__success').show();
    }
  });
});


//// Header
// мобильное меню пользователя
;$(function() {

  var accMenuWidth = $('.header__account-menu').outerWidth();

  if($(window).width() < 960) {
    // при загрузке прячем блок на ширину элемента
    var accMenu = $('.header__account-menu').css('right',-accMenuWidth);
    // добавляем функцию overlay
    var overlay = $('<div class="modal-backdrop modal-backdrop--header fade show"></div>');
  }

  $('.header__login-reg').click(function() {
    if($(window).width() < 960) {
      $(this).addClass('header__login-reg--open');
      $('.header__account-menu').animate({
        right: '0px'
      }, 200);
      // включаем overlay
      overlay.appendTo(document.body);
    }
  });

  $(document).mouseup(function(e) {
    var div = $('.header__login-reg');
    var accMenuWidth = $('.header__account-menu').outerWidth();
    if($(window).width() < 960) {
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.header__account-menu').animate({
          right: -accMenuWidth
        }, 200);
        overlay.remove();
      }
    }
  });

});

// мобильное окно авторизации
;$(function() {
  if($(window).width() < 960) {

    //получаем ширину блока
    var loginMenuWidth = $('.header__login').outerWidth();

    // если с моб устройств, то скрываем на ширину блока
    var loginMenu = $('.header__login-notreg .header__login').css('right',-loginMenuWidth);
    // добавляем функцию overlay
    var overlay = $('<div class="modal-backdrop modal-backdrop--header fade show"></div>');
  }

  // показ при клике меню Авторизации
  $('.header__login-notreg .personal-btn').click(function() {

    // если планшнет
    if($(window).width() < 960) {
      // показываем элемент
      $('.header__login-notreg').addClass('header__login-notreg--open');
      // включаем overlay
      overlay.appendTo(document.body);
    }

    // анимация выезжания
    if( ($(window).width() < 960) && ($(window).width() > 540) ) {
      $('.header__login').animate({
        right: '0px'
      }, 200);
    } else if ( $(window).width() < 540 ) {
      $('.header__login').animate({
        left: '0'
      }, 200);
    }

  });

  // скрываем Авторизацию если кликнули в другом месте
  $(document).mouseup(function(e) {
    var div = $('.header__login-notreg');
    if( ($(window).width() < 960) && ($(window).width() > 540)) {
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.header__login').animate({
          right: -loginMenuWidth,
        }, 200);
        overlay.remove();
        $('.header__login').removeAttr('style');
      }
    }  else if ( $(window).width() < 540 ) {
      if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.header__login').animate({
            left: '100%'
          }, 200);
        overlay.remove();
      }
    }
  });

  // закрываем блок при клике на любую кнопку
  // $('.header__login button').click(function () {
  //   if ($(window).width() < 960) {
  //     $('.header__login').animate({
  //       right: -loginMenuWidth,
  //       left: '100%'
  //     }, 200);
  //   }
  // });
});

// событие при повороте экрана и изменении ширины
function resizeHeader() {
  $('.header__login-reg').removeClass('header__login-reg--open');
  $('.header__login-notreg').removeClass('header__login-notreg--open');
  $('.header__login').removeAttr('style');
  $('.header__account-menu').removeAttr('style');
}
$(window).resize(function() {
  resizeHeader();
});
window.addEventListener("orientationchange", function() {
  resizeHeader();
}, false);


//// HEADER конец

//proto-card
$('#proto-card-vary-color-btn, #proto-card-vary-color-btn-2').click(function(){
  $(this).hide();
});

$("#proto-card-modification-btn").click(function(){
  var text = $(this).text()=='Скрыть 3 модификации'? '+ 3 модификации' : 'Скрыть 3 модификации';
  $(this).text(text);
}); 

$('.proto-card__vary-color_wrap').click(function(){
  $(this).addClass('border-warning').addClass('border-radius').removeClass('border-secondary-4').children().removeClass('border-radius');
  $(this).siblings().removeClass('border-warning').removeClass('border-radius').addClass('border-secondary-4').children().addClass('border-radius');
});
$('.proto-card__vary-size_wrap').click(function(){
  $(this).addClass('border-warning').addClass('tag-active');
  $(this).siblings().removeClass('border-warning').removeClass('tag-active');
});



$('#proto-card-show-phone').click(function(){
  $(this).hide();
});

var scrollbegin = $('#proto-card-price').offset().top + $("#proto-card-price").height();
//console.log(scrollbegin);
$(window).scroll(function(){
  if ( $(this).scrollTop() > scrollbegin) {
    $("#proto-card-total-price").removeClass("d-none");
  }
  if ( $(this).scrollTop() < scrollbegin) {
    $("#proto-card-total-price").addClass("d-none");
  }
});

$(window).scroll (function () {
    if ($(this).scrollTop() > 0) {
      $('.side-bar').addClass('side-bar__sticky');
      $('.side-bar').removeClass('position-absolute');
      $('.first-screen').addClass('minus-height');
    } else {
      $('.side-bar').removeClass('side-bar__sticky');
      $('.side-bar').addClass('position-absolute');
      $('.first-screen').removeClass('minus-height');
    }
  })

//// Карточка товара Сайдбар
// выбор активного элемента фильтра
$('.modific-sort__item').click(function() {
  // смена активного элемента внутри своего родителя
  $(this).closest('.modific').find('.modific-sort__item').removeClass('modific-sort__item--active');
  $(this).addClass('modific-sort__item--active');
});

// вставка выбранного материала вместо изображения
$('.modific-sort__item').click(function(){
  var modificMaterial = $(this).find('img').attr('src');
  $('.product-sidebar__pic img').attr("src", modificMaterial);
  $('.product-sidebar__pic').addClass('product-sidebar__pic--material');
});


;
$(function() {

  var productSidebarWidth = $('.product-sidebar').outerWidth();
  var windowWidth = $(window).width();

  // раскрывать сайдбар
  $('.show-sidebar').click(function() {

    var productSidebarHide = $('.header__login-notreg .header__login').css('right', -windowWidth);
    if ($(window).width() < 540) {
      $('.product-sidebar').animate({
        right: '0',
        left: '0'
      }, 200);
    }
    if ( $(window).width() > 540 ) {
      $('.product-sidebar').animate({
        right: '0'
      }, 200);
      overlay.appendTo(document.body);
    }
    $('.product-sidebar').addClass('product-sidebar--open');
  });

  // свернуть сайдбар при клике на заголовок
  $('.product-sidebar__header').click(function() {
    $('.product-sidebar').removeClass('product-sidebar--open');
    if ($(window).width() < 540) {
      $('.product-sidebar').animate({
        right: -windowWidth,
        left: '100%'
      }, 200);
    }
    if ( $(window).width() > 540 ) {
      $('.product-sidebar').animate({
        right: -windowWidth
      }, 200);
      overlay.remove();
    }
  });

  // свернуть сайдбар при клике на любое место
  $(document).mouseup(function(e) {
    var div = $('.product-sidebar');
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.product-sidebar').removeClass('product-sidebar--open');
        if ($(window).width() < 540) {
          $('.product-sidebar').animate({
            right: -windowWidth,
            left: '100%'
          }, 200);
        }
        if ( $(window).width() > 540 ) {
          $('.product-sidebar').animate({
            right: -windowWidth
          }, 200);
          overlay.remove();
        }
      }
  });


});




//// Аккордеон
// слайдер
// $('.accordion-item__slider').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   // autoplay: true,
//   autoplaySpeed: 2000,
//   variableWidth: true,
//   infinite: false
// });

// $('.accordion-item__slider').slick({
//   // dots: true,
//   // infinite: false,
//   // speed: 300,
//   // slidesToShow: 4,
//   // slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // autoplay: true,
//         autoplaySpeed: 2000,
//         variableWidth: true,
//         infinite: false,
//         settings: "unslick"
//       }
//     }
//   ]
// });

// slider
  $slick_slider = $('.accordion-item__slider');
  settings_slider = {
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
          // slidesToScroll: 1
        }
      }
    ]
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };


//// Товары в коллекции
$('.product-mini-collection').click(function () {
  $(this).toggleClass('product-mini--active');
});
// выбор цвета
$('.products-selected__colors-item').click(function () {
  $('.products-selected__colors-item').removeClass('products-selected__colors-item--active');
  $(this).addClass('products-selected__colors-item--active');
});

$ (function () {
$('.recommendation-slider').slick({
  loop: true,
  draggable: true,
  arrows: true,
  prevArrow: '.recommendation-slider_prev',
  nextArrow: '.recommendation-slider_next',
  dots: false,
  slidesToShow: 5,
  variableWidth: true
  });
})

//show seller's number 
$("#proto-card-connect-seller").click(function(){
  $(this).hide();
});
$("#proto-card-connect-seller-2").click(function(){
  $(this).hide();
});

$("#proto-card-main-img").zoom();

//proto-card
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  arrows: true,
  prevArrow: $('#proto-card-top'),
  nextArrow: $('#proto-card-bottom'),
  vertical: true,
  verticalSwiping: true,
  responsive: [
      {
          breakpoint: 1050,
          settings: {
            prevArrow: $('#proto-card-top'),
        nextArrow: $('#proto-card-bottom'),
        vertical: true,
        verticalSwiping: true
          }
      },
      {
          breakpoint: 1366,
          settings: {
        prevArrow: $('#proto-card-prev'),
          nextArrow: $('#proto-card-next'),
          vertical: false,
          verticalSwiping: false
          }   
      }
  ]
});

$(".slider-for").on('afterChange', function(event, slick, currentSlide){
  $("#proto-card-num-photo").text(currentSlide + 1);
});

$('#proto-card-vary-color-btn, #proto-card-vary-color-btn-2').click(function(){
  $(this).hide();
});

$("#proto-card-modification-btn").click(function(){
  var text = $(this).text()=='Скрыть 3 модификации'? '+ 3 модификации' : 'Скрыть 3 модификации';
  $(this).text(text);
}); 

$('.proto-card__vary-color_img').click(function(){
  $(this).addClass('border-warning').addClass('border-radius').removeClass('border-white').children().removeClass('border-radius');
  $(this).siblings().removeClass('border-warning').removeClass('border-radius').addClass('border-white').children().addClass('border-radius');
});

$('#proto-card-show-phone').click(function(){
  $(this).hide();
});

var scrollbegin = $('#proto-card-price').offset().top + $("#proto-card-price").height();
$(window).scroll(function(){
  if ( $(this).scrollTop() > scrollbegin) {
    $("#proto-card-total-price").removeClass("d-none");
  }
  if ( $(this).scrollTop() < scrollbegin) {
    $("#proto-card-total-price").addClass("d-none");
  }
});

