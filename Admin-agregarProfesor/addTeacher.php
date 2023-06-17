<?php
session_start();
include("./conexion.php");
include("./getPosts.php");

$checkState = "SELECT * FROM DOCENTE WHERE numeroEmpleado='$numeroEmpleado'";
$resState = mysqli_query($con, $checkState);
$resStateRows = mysqli_num_rows($resState);
$respAX = [];

if($resStateRows == 0){
    $sqlAddRow = "INSERT INTO docente (numeroEmpleado, nombre, primerApellido, segundoApellido, claveDepto, contrasena, correo, encuesta, rol) VALUES ('$numeroEmpleado', '$nombre', '$primerApellido', '$segundoApellido', 'DAE', '$contrasena', NULL, '0', 'user');";
    $resAddRow = mysqli_query($con, $sqlAddRow);
    if ($resAddRow) {
        $filas_afectadas = mysqli_affected_rows($con);
        if ($filas_afectadas > 0) {
            $respAX["msj"] = "$numeroEmpleado Ha sido agregado";
        }else {
            $respAX["msj"] = "No se pudo agregar al docente ERROR:123";
        }
    }
    echo json_encode($respAX);
}else{
    $respAX["msj"] = "El Docente estaba registrado previamente";
}
?>
