/*go to next page when click on button */
$(document).ready(function() {
  // $("#button1").on("click", function() {
  //   $(location).attr("href", "file:///C:/Users/Linnii/Desktop/projectoba/oba2/niveau-kiezen/niveau-kiezen.html")
  // });

  // Ga na intro naar volgende pagina
  $("#button1").on("click", function() {
    window.open('../niveau-kiezen/niveau-kiezen.html', "_self");
  });
});
