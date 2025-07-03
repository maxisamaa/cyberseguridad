$(document).ready(function(){
  $("#formularioReserva").submit(function(event){
    event.preventDefault(); // Detiene el submit normal
    if (this.checkValidity()) {
      $(".card-title").text("Formulario enviado")
      $(".card-text").text("Gracias recibiras un correo de confirmacion!")
      $(".card").fadeIn();
    
    } else {
      console.log("Por favor completa todos los campos.");
      this.reportValidity(); 
    }
  });
});

$(".close").click(function(){
  $(".modal").fadeOut();
})

$(document).ready(function() { 
  $('.reservar-btn').on('click', function() {
    let titulo = $(this).data('pelicula');


    // Mostrar el modal (puedes usar un plugin como Bootstrap Modal si prefieres)
    $('.modal').fadeIn();
  });
});

$(document).ready(function(){

    $('#testSeguridad').on('submit', function(e){
        e.preventDefault(); // Evita envío real

        // Limpiar mensajes previos
        $('.resultado').remove();

        // Claves correctas
        const correctas = {
            pregunta1: 'c',
            pregunta2: 'b',
            pregunta3: 'd'
        };

        let todasCorrectas = true;

        $.each(correctas, function(pregunta, respuestaCorrecta){
            const seleccionada = $(`input[name="${pregunta}"]:checked`);
            if(seleccionada.length > 0){
                const respuestaUsuario = seleccionada.val();
                const mensaje = $('<span class="resultado"></span>').css('margin-left','10px');

                if(respuestaUsuario === respuestaCorrecta){
                    mensaje.text('Correcto').css('color','green');
                }else{
                    mensaje.text('Incorrecto').css('color','red');
                    todasCorrectas = false;
                }

                // Insertar mensaje después del input seleccionado
                seleccionada.parent().append(mensaje);
            }
        });

        // Mensaje general opcional
        if(todasCorrectas){
            alert('¡Felicidades! Todas tus respuestas son correctas.');
        } else {
            alert('Revisa tus respuestas incorrectas marcadas en rojo.');
        }
    });

});


/* let elementoImagen = document.querySelector("#imagen");
elementoImagen.addEventListener("mouseover", function(){
    this.src = "img/otro_gatito.png";
});*/