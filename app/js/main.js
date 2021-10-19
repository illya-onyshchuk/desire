$(function () {
  $('.header__btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });

  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
  });


  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowprev"><img src="images/arrow-prev.svg" alt="arrow prev"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrownext"><img src="images/arrow-next.svg" alt="arrow next"></button>',
  });


  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
})