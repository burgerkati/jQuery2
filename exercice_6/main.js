$(document).ready(function(){
  $("#green").mouseenter(function(){
    $("#text").css("color","#008000");
  });
  $("#green").mouseleave(function(){
    $("#text").css("color","#000000");
  });
  $("#red").mouseenter(function(){
    $("#text").css("color","#ff0000");
  });
  $("#red").mouseleave(function(){
    $("#text").css("color","#000000");
  });
  $("#blue").mouseenter(function(){
    $("#text").css("color","#0000ff");
  });
  $("#blue").mouseleave(function(){
    $("#text").css("color","#000000");
  });
});
/*
// first try did not work on mouseleave
$(document).ready(function(){
  $("#green").on({
    mouseenter: function(){
      $("#text").css("color", "#008000");
    },
  });
  $("#red").on({
    mouseenter: function(){
      $("#text").css("color", "#ff0000");
    },
  });
  $("#blue").on({
    mouseenter: function(){
      $("#text").css("color", "#0000ff");
    },
  });
  $("#text").on({
    mouseleave: function(){
      $("#text").css("color", "#000000");
    },
  });
});
*/
