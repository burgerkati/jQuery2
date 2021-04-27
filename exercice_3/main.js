// Afficher ou masquer la div texte au clic des liens fournis
/*
// first try only works when click on hide link
$("#hide").click(function(){
  $("#text").hide();
});
*/
$(document).ready(function(){
  $("#hide").click(function(){
    $("#text").hide();
  });
  $("#show").click(function(){
    $("#text").show();
  });
});
