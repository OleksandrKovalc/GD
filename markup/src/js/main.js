//= wow.js
//= slick.js
//= slick_custom.js
//= lightbox.js
//=  anchors.js
//= fixed-btn-back.js
//= input-button.js
//= 3d_viewer.js
//= map.js
//= faq.js

new WOW().init();

$(function () {
  //nav dropdown
  $(".menu .dropdown a").on("click", function () {
    $(this).parents(".dropdown ").toggleClass("li-active");
  });

  //custom select
  $("select-option_selected").on("click", function () {
    $(this).parents(".select ").toggleClass("select-active");
  });

  $(".select-option_selected").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".select").toggleClass("select_open");
  });

  //burger-menu
  $(".nav-opener").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("nav-active");
  });

  //3d viewer
  $("#view-3d").angle({
    speed: 3,
    drag: true,
  });
});
