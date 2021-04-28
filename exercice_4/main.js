// Au clic sur un bouton de couleur, modifier la couleur du texte de la div
$(document).ready(function(){
  $('#green').click(function(){
    $('#text').css('color', '#008000');
  });
  $('#red').click(function(){
    $('#text').css('color', '#ff0000');
  });
  $('#blue').click(function(){
    $('#text').css('color', '#0000ff');
  });
});
