$(document).ready(() => {
    const validator = new JustValidate("#acceso_lock");
    validator.addField('#numeroEmpleado', [
        {
            rule: 'required',
            errorMessage: "Ingresa el numero de empleado"
        },
        {
            rule: 'maxLength',
            value: 3,
            errorMessage: "Maximo 3 caracteres"
        },
    ]).onSuccess(() => {
        var radios = document.getElementsByName('acceso');
        var valorSeleccionado;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valorSeleccionado = radios[i].value;
                break;
            }
        }
        if (valorSeleccionado == 0) {
            Swal.fire({
                title: "¿Estás seguro?",
                html: "El docente no podrá acceder al sistema",
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
                    accessUpdate();
                }
            });
        }else{
            Swal.fire({
                title: "¿Estás seguro?",
                html: "El docente tendrá acceso al sistema de nuevo",
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
                    accessUpdate();
                }
            });
        }
    }); // justValidate/
}); // ready/

function accessUpdate(){
    $.ajax({
        url: "../php/acceso.php",
        method: "POST",
        data: $("#acceso_lock").serialize(),
        cache: false,
        success: (respAX) => {
            let AX = JSON.parse(respAX);
            Swal.fire({
                title:AX.title,
                text:AX.msj,
                didDestroy:()=>{
                    if(AX.code==1){
                        location.reload();
                    }else{
                        location.reload();
                    }
                }
              }); // sweetAlert/
        }
    }); // ajax/
}