$description = $(".description-country");

$(".enabled").hover(
  function () {
    $(this).attr("class", "enabled heyo");
    $description.addClass("active");
    $description.html($(this).attr("id"));
  },
  function () {
    $description.removeClass("active");
  }
);

$(".ag-canvas").on("mousemove", function (e) {
  $description.css({
    left: e.originalEvent.layerX,
    top: e.originalEvent.layerY - 60,
  });
});
