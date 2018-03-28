//set cursor position once page is loaded
$(document).ready(function(){
function setSelectionRange(input, selectionStart, selectionEnd) {
if (input.setSelectionRange) {
input.focus();
input.setSelectionRange(selectionStart, selectionEnd);
} else if (input.createTextRange) {
var range = input.createTextRange();
range.collapse(true);
range.moveEnd('character', selectionEnd);
range.moveStart('character', selectionStart);
range.select();
}
}

function setCaretToPos(input, pos) {
setSelectionRange(input, pos, pos);
}

//default set of cursor once page is loaded
setCaretToPos($("#text1")[0], 2)

//move cursor to next position once user input a key
$("#text1").keypress(function(event){
if (event.which == 32) {
//move cursor if the input is a backspace
$("#text1").keyup(function(){
setCaretToPos($("#text1")[0], 6)

$("#text1").keypress(function(event){
//move cursor if the input is a backspace
if (event.which == 32) {
$("#text1").keyup(function(){
setCaretToPos($("#text1")[0], 11)
});

} else {
//stop input if it is not a backspace
event.preventDefault(); 
}
});
});
} else {
//stop input if it is not a backspace
event.preventDefault();
}
});
});