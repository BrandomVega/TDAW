<?php
session_start();
include("./conexion.php");
include("./getPosts.php");

$sqlCheckTeacher = "SELECT * FROM docente WHERE numeroEmpleado = '$numeroEmpleado'";
$respuesta = mysqli_query($con, $sqlCheckTeacher); 
$numFilasRes = mysqli_num_rows($respuesta); //Se encontró un profesor
$respAX = [];
if($numFilasRes >= 1){ //Ya hay un profesor registrado
  $respAX["msj"] = "El profesor que intentas registrar ya esta registrado";
  $respAX["title"] = "Ha ocurrido un error";
  $respAX["code"] = 0;
}else{ 
    $sqlUpdateDocente = "INSERT INTO docente(numeroEmpleado, nombre, primerApellido, segundoApellido, claveDepto, contrasena, correo, encuesta, rol)  VALUES ('$numeroEmpleado','$nombre','$primerApellido','$segundoApellido','$claveDepto','$contrasena','$correo','$encuesta','$rol')";
    if ($con->query($sqlUpdateDocente) === TRUE) {
        $respAX["title"] = "Éxito";
        $respAX["msj"]="El docente fue agregado correctamente.";
        $respAX["code"] = 1;
    } else {
        $respAX["title"] = "ERRORERRORERROR";
        $respAX["msj"]= "Error al insertar la tupla: ";
        $respAX["code"] = 0;
    }
}

echo json_encode($respAX);
?>
