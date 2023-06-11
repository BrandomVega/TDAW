<?php
    include("./conexion.php");
    include("./getPosts.php");
    
    $getInfo = "SELECT nombre,primerApellido,segundoApellido,encuesta,claveDepto FROM docente WHERE rol='user'";
    
    $res = mysqli_query($con, $getInfo);


    if (mysqli_num_rows($res) > 0) {
        $table= array();
        while ($row = mysqli_fetch_array($res)) {
            $nombreCompleto = $row['nombre']." ".$row['primerApellido']." ".$row['segundoApellido'];
            array_push($table,array(
                "nombre"=>$nombreCompleto,
                "encuesta"=>$row['encuesta'],
                "depto"=>$row['claveDepto'],
            ));
        }

        $json = json_encode($table);
        if ($json === false) {
            die("Error al generar el JSON");
        }
        echo($json);
    }
?>