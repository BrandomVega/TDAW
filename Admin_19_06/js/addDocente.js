$(document).ready(() => {
    const validator = new JustValidate("#addTeacher");
    validator.addField('#nombre', [
        {
            rule: 'required',
            errorMessage: "Se requiere el nombre"
        },
        {
            rule: 'maxLength',
            value: 25,
            errorMessage: "Maximo 25 caracteres"
        },
    ]).addField('#primerApellido', [
        {
            rule: 'required',
            errorMessage: "Se requiere el apellido"
        },
        {
            rule: 'maxLength',
            value: 25,
            errorMessage: "Maximo 25 caracteres"
        },
    ]).addField('#numeroEmpleado', [
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
            url: "../php/addTeacher.php",
            method: "POST",
            data: $("#addTeacher").serialize(),
            cache: false,
            success: (respAX) => {
                let AX = JSON.parse(respAX);
                Swal.fire({
                    title:AX.title,
                    text:AX.msj,
                    didDestroy:()=>{
                        if(AX.code==1){
                            location.href = "./";
                        }else{
                            location.href = "../admin/admin.html";
                        }
                    }
                  }); // sweetAlert/
            }
        }); // ajax/
    }); // justValidate/
}); // ready/

