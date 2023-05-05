let mySwiper = new Swiper(".swiper-container", {
  slidesPerwiew: 1,
  spaceBetween: 0,

  breakpoints: {
    // when window width is >= 320px
    420: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function () {
  $("#accordion").accordion();
});

$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".burger,.header__nav").toggleClass("active");
    $("body").toggleClass("lock");

    $(this).find(".line").toggleClass("active");
    $(this).find(".line").toggleClass("hover");
  });

  $(".header__nav, .nav__list, .nav__link").click(function () {
    $(".burger, .header__nav, .line").removeClass("active");
    $("body").removeClass("lock");
  });


  $("a[href^='#']").click(function (event) {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: ($(_href).offset().top - $(".header").height()) + "px"
    });
    return false;
  });
});