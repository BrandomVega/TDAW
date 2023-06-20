$(document).ready(()=>{
    const validator =  new JustValidate("#loginform");
    validator.addField('#numeroEmpleado', [
        {
        rule: 'required',
        errorMessage:"Por favor ingresa tu usuario"
        },
        {
        rule: 'integer',
        errorMessage:"Deben ser solo números"
        },
        {
        rule: 'maxLength',
        value: 3,
        errorMessage:"Maximo 3 digitos"
        },
    ])
    .addField('#contrasena', [
        {
        rule: 'required',
        errorMessage:"Falta tu contraseña"
        },
        {
        rule: 'integer',
        },
        {
        rule: 'maxLength',
        value: 3,
        },
    ]).onSuccess(()=>{
      $.ajax({
        url:"../php/index_AX.php",
        method:"POST",
        data:$("#loginform").serialize(),
        cache:false,
        success:(respAX)=>{
          let AX = JSON.parse(respAX);
          Swal.fire({
            title:"ESCOM - IPN",
            text:AX.msj,
            icon:AX.icono,
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

