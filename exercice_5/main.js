/*
Définir la bordure du champ à "1px solid green" quand un champ a le focus
Définir la bordure à "1px solid red" quand le champ perd le focus
*/
$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("border", "1px solid #008000");
  });
  $("input").blur(function(){
    $(this).css("border", "1px solid #ff0000");
  });
});
