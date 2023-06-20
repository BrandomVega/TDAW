<?php
include("./conexion.php");

$numeroEmpleado = $_POST['numeroEmpleado']; //numeroEmpleado is sedended through ajax
include("./getPosts.php");

$sql = "UPDATE docente SET encuesta=0 WHERE numeroEmpleado = '$numeroEmpleado'";

$respuesta = mysqli_query($con, $sql);
$respAX = [];
if($respuesta){
    $filas_afectadas = mysqli_affected_rows($con);
    if ($filas_afectadas > 0) {
        $respAX["msj"] = "Se restableció la encuesta del docente con número de empleado '$numeroEmpleado'";
    } else {
        $respAX["msj"] = "La encuesta no está contestada, no es posible restablecer";
    }
}
else{
    $respAX["msj"] = "Lo sentimos, hubo un error del lado del servidor";
}

echo json_encode($respAX);
?>
