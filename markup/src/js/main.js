//= wow.min.js
//= slick.js
//= slick_custom.js
//= lightbox.js

new WOW().init();

$(function () {
  //nav dropdown
  $(".menu .menu-item-has-children a").on("click", function () {
    $(this).parents(".menu-item-has-children ").toggleClass("active");
  });

  //burger-menu
  $(".nav-opener").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("nav-active");
  });
});
