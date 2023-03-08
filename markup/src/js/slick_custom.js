$(function () {
  $(".reviews-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".reviews-slider-nav .icon-arrow-thin-left"),
    nextArrow: $(".reviews-slider-nav .icon-arrow-thin-right"),
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".partners-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
        },
      },
    ],
  });

  $(".pro-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  $(".app-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4300,
    arrows: false,
    vertical: true,
  });

  $(".director-slider").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: "5px",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(function () {
  function slickOnResize() {
    $(".menu-slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: "unslick",
        },
      ],
    });
  }

  slickOnResize();

  $(window).resize(function () {
    var $window_width = $(window).width();
    if ($window_width < 1024) {
      $(".menu-slider").slick("resize");
    }
  });
});
