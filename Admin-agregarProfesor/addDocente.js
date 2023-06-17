$(document).ready(() => {
    const validator = new JustValidate("#addTeacher");
    validator.addField('#first_name', [
        {
            rule: 'required',
            errorMessage: "Se requiere el nombre"
        },
        {
            rule: 'maxLength',
            value: 25,
            errorMessage: "Maximo 25 caracteres"
        },
    ]).addField('#last_name', [
        {
            rule: 'required',
            errorMessage: "Se requiere el apellido"
        },
        {
            rule: 'maxLength',
            value: 25,
            errorMessage: "Maximo 25 caracteres"
        },
    ]).addField('#clave', [
        {
            rule: 'required',
            errorMessage: "Ingresa el numero de empleado"
        },
        {
            rule: 'maxLength',
            value: 3,
            errorMessage: "Maximo 3 caracteres"
        },
    ]).addField('#claveDepto', [
        {
            rule: 'required',
            errorMessage: "Ingresa el departamento"
        },
        {
            rule: 'maxLength',
            value: 10,
            errorMessage: "Maximo 10 caracteres"
        },
    ]).addField('#password', [
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
            url: "../php/addTeacher.php",
            method: "POST",
            data: $("#addTeacher").serialize(),
            cache: false,
            success: (respAX) => {
                let AX = JSON.parse(respAX);
                Swal.fire({
                    title:"ESCOM - IPN",
                    text:AX.msj,
                    didDestroy:()=>{
                        if(AX.cod == 1){
                          location.href = "../Matform.html";
                        }else if(AX.cod == 2){
                          location.href = "../admin/admin.html";
                        }else{
                          location.reload();
                        }  
                      }
                  }); // sweetAlert/
            }
        }); // ajax/
    }); // justValidate/
}); // ready/

