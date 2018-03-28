//move cursor to the next textbox when user gives input
$(document).ready(function(){
    $("#text1").keyup(function(){
        if(this.value.length == $(this).attr('maxlength')) {
         $("#text2").focus();
     }
    });
	
	$("#text2").keyup(function(){
        if(this.value.length == $(this).attr("maxlength")) {
         $("#text3").focus();
     }
    });
	
	$("#text3").keyup(function(){
        if(this.value.length == $(this).attr("maxlength")) {
         $("#text4").focus();
     }
    });
	
	$("#text4").keyup(function(){
        if(this.value.length == $(this).attr("maxlength")) {
         $("#text5").focus();
     }
    });
});

//removes text when textbox is clicked
$(document).ready(function(){
$("#text1").on("click", function(){
$(this).val("");
});
});

$(document).ready(function(){
$("#text2").on("click", function(){
$(this).val("");
});
});

$(document).ready(function(){
$("#text3").on("click", function(){
$(this).val("");
});
});

$(document).ready(function(){
$("#text4").on("click", function(){
$(this).val("");
});
});

$(document).ready(function(){
$("#text5").on("click", function(){
$(this).val("");
});
});