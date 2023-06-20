function reset(numEmpleadoButton) {
    Swal.fire({
        title: "¿Estás seguro?",
        html: "Esta acción no se puede deshacer.<br>La encuesta del empleado "+numEmpleadoButton+" será reiniciada",
        icon: 'warning',
        showCancelButton: false,
        showCloseButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "../php/resetEncuesta.php",
                method: "POST",
                data: { numeroEmpleado: numEmpleadoButton }, 
                cache: false,
                success: function(respAX) {
                  let data = JSON.parse(respAX);
                  Swal.fire({
                      title:"¡Se realizó con éxito!",
                      text:data.msj,    
                      didDestroy:()=>{
                        var tbody = document.getElementById("datosEncuesta"); //Borrar la encuesta solamente antes de recargar
                        if(tbody!=null){  
                            tbody.innerHTML = "";
                        }
                        recargarEncuesta();
                      }
                    }); 
                },
                error: function() {
                  alert('Error al obtener los datos.');
                }
              });            
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
      });
  }

    

