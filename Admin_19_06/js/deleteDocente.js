$(document).ready(() => {
    const validator = new JustValidate("#deleteDocente");
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
    ]).addField('#contrasena', [
        {
            rule: 'required',
            errorMessage: "Se requiere la contraseña"
        },
        {
            rule: 'maxLength',
            value: 8,
            errorMessage: "Maximo 8 caracteres"
        },
    ]).onSuccess(() => {
        $.ajax({
            url: "../php/deleteDocente.php",
            method: "POST",
            data: $("#deleteDocente").serialize(),
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
    }); // justValidate/
}); // ready/

