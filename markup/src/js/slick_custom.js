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

  $(".director-slider").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    arrow: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          centerMode: true,
          // centerPadding: "40px",
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});
