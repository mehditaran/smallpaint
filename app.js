var color = $(".selected").css("background-color");

$(".color_box_item div").click(function() {
  color = $(this).css("background-color");
});
// console.log(color);