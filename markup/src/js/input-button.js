$(document).on("click", "button.plus, button.minus", function () {
  var qty = $(this).parent(".quantity").find(".qty");
  var val = parseFloat(qty.val());
  var max = parseFloat(qty.attr("max"));
  var min = parseFloat(qty.attr("min"));
  var step = parseFloat(qty.attr("step"));

  if ($(this).is(".plus")) {
    if (max && max <= val) {
      qty.val(max).change();
    } else {
      qty.val(val + step).change();
    }
  } else {
    if (min && min >= val) {
      qty.val(min).change();
    } else if (val > 1) {
      qty.val(val - step).change();
    }
  }
});
