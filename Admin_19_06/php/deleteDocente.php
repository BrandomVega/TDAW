<?php
session_start();
include("./conexion.php");
include("./getPosts.php");

$sqlCheckTeacher = "SELECT * FROM docente WHERE numeroEmpleado = '$numeroEmpleado'";
$respuesta = mysqli_query($con, $sqlCheckTeacher); 
$numFilasRes = mysqli_num_rows($respuesta); //Se encontró un profesor
$respAX = [];
if($numFilasRes == 0){ //
  $respAX["msj"] = "El profesor que intentas eliminar no existe";
  $respAX["title"] = "Ha ocurrido un error";
  $respAX["code"] = 0;
}else{ 
    $sqlUpdateDocente = "DELETE FROM  docente WHERE numeroEmpleado = '$numeroEmpleado'";
    if ($con->query($sqlUpdateDocente) === TRUE) {
        $respAX["title"] = "Éxito";
        $respAX["msj"]="El docente fue eliminado con exito.";
        $respAX["code"] = 1;
    } else {
        $respAX["title"] = "ERRORERRORERROR";
        $respAX["msj"]= "Error al insertar la tupla: ";
        $respAX["code"] = 0;
    }
}

echo json_encode($respAX);
?>
