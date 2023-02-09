$(function () {
  $(".reviews-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".reviews-slider-nav .icon-arrow-thin-left"),
    nextArrow: $(".reviews-slider-nav .icon-arrow-thin-right"),
    dots: true,
    responsive: [
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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          arrow: false,
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
});
