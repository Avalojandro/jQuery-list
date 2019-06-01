
$(document).ready(function () {

$("h1").html("To do List")    

$("ol").hide();
  
    $(".boton").click(function(){
   
        $("ol").show();

    var tarea = $("input").val();
    if(!tarea == "")
    {
      var espacio = $("<li></li>").text(tarea);
      $(espacio).append("<button class='eliminar'>eliminar</button>");
      
      $("#lista").append(espacio);
      
      $("input").val("");
      
      $(".eliminar").addClass(".boton").click(function(){
      
        $("li").remove();
      
      });
    }
  });

});
