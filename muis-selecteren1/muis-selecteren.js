$(document).ready(function() {

  // circles disappear when it is clicked
  $(".dot, .dot2, .dot3").on("click", function() {
    $(this).hide();
  });

  // Check of alle circles gelikt zijn. Toon feedback als dit zo is.

  // go to next assignment when click on button
  $("#button3").on("click", function() {
    window.open('../MuisKlikBeginner1.2/MuisKlikBeginner1.2.html', "_self");
  });

});
