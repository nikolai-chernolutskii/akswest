$(function () {
  $('.partners__slider-inner').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    speed: 5000,
  });

  $('.feedback__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    // autoplay: true,
    // autoplaySpeed: 4000,
    // speed: 5000,
  });

  $('.hamburger__gen').on('click', function () {
    $('.menu-320-inner').slideToggle();
  });

  $('.close__box-320').on('click', function () {
    $('.menu-320-inner').slideToggle();
  });

  $('.gallery__slick-slider').slick({
   arrows: false,
   centerMode: true,
   centerPadding: '400px',
   focusOnSelect: true,
   slidesToShow: 1,
   swipeToSlide: true,
   cssEase: 'linear',
   responsive: [
    {
      breakpoint: 1441,
      settings: {
        centerPadding: '350px',
      }
    },
    {
      breakpoint: 1301,
      settings: {
        centerPadding: '300px',
      }
    },
    {
      breakpoint: 1196,
      settings: {
        centerPadding: '250px',
      }
    },
    {
      breakpoint: 1121,
      settings: {
        centerPadding: '200px',
      }
    },
    {
      breakpoint: 971,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 911,
      settings: {
        centerPadding: '125px',
      }
    },
    {
      breakpoint: 831,
      settings: {
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 769,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 746,
      settings: {
        centerPadding: '125px',
      }
    },
    {
      breakpoint: 631,
      settings: {
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 516,
      settings: {
        centerPadding: '35px',
      }
    },
    {
      breakpoint: 501,
      settings: {
      centerPadding: '30px',
      centerMode: false,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      }
    },
  ]
  });

  // Заново прописать сам слайдер в JS (см. ниже, + API, а именно breakpoints (параметр spaceBetween) и zoom); 

  // ++также заново прописать слайдер и в css (style и media) - значения width и height для gallery__slider (также поэкспериментировать с max-width: 100%;); 

  // ++в html вернуть структуру к изначальной либо тоже прописать заново 

  // 

  var swiper = new Swiper('.gallery__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    breakpointsBase: 'container',
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 200
      },
      // when window width is >= 515px
      515: {
        slidesPerView: 2,
        spaceBetween: 400
      },
      // when window width is >= 630px
      630: {
        slidesPerView: 3,
        spaceBetween: 450
      },
    },
  });


});
