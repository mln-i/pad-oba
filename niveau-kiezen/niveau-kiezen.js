//display popup once mouse hovers over element
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// go to the next page when click on button
$("#button1").on("click", function() {
  window.open('../training-kiezen/training-kiezen.html', "_self");
});
