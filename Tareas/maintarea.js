// Agregar tarea
  $(
    function(){
      let guardadas= localStorage.getItem("tareas");
      if(guardadas !=null){
        $("section").html(guardadas);
      }
    }
    )
    
    $("#agregar").on("click",function(){
      $("aside").css("display","block")
    })
    
    $("#cerrar").on("click",function(){
      $("aside").css("display","none");
      $("form")[0].reset();
    })

    $("form").on("submit", function(){
      let titulo = $("#titulo").val()
      let contenido = $("#contenido").val()
      
    let div = $("<div></div>");
    div.addClass("tareas")
    .html(`<header class="nota importante ${/* agregar clase para diferenciar los importantes */}">
    <h2>${titulo}</h2>
    <a href="" class="eliminar">X</a>
    </header>
    <p>${contenido}</p>`)
      
    //if (es importante) {
      $("section").append(div);
    //} else {
    //  $("section").append(div);
    //}
      
      
    $("form")[0].reset();
    $("aside").css("display","none");
      
    guardarTareas()
      
    return false;
    })
    
    // Eliminar tarea cuando se hace clic en el botón "Eliminar"
    function guardarTareas(){
      let actuales = $("section").html();
      localStorage.setItem("tareas",actuales)
    }
    
$("section").on("click",".tareas .eliminar", function(){
    let resp_confirmar = confirm("Queres eliminar la tarea?")
    if(resp_confirmar){
        $(this).parent().parent().remove();
        guardarTareas();
    }
    return false;
})

// modal interaccion

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
