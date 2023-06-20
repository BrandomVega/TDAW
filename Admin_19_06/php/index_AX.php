<?php
  session_start();
  include("./conexion.php");
  include("./getPosts.php");


  $sqlCheckLogin = "SELECT * FROM docente WHERE numeroEmpleado = '$numeroEmpleado' AND contrasena = '$contrasena' AND rol='user' ";
  $resCheckLogin = mysqli_query($con, $sqlCheckLogin); 
  $numFilasResUser = mysqli_num_rows($resCheckLogin); //Se encontró el usuario 
  $sqlCheckAdmin = "SELECT * FROM docente where numeroEmpleado = '$numeroEmpleado' AND contrasena = '$contrasena' AND rol='admin'";
  $resCheckAdmin = mysqli_query($con, $sqlCheckAdmin); 
  $numFilasResAdmin = mysqli_num_rows($resCheckAdmin); //Se encontró el admin

  $respAX = [];
  if($numFilasResUser == 1){
    $infCheckLogin = mysqli_fetch_row($resCheckLogin);
    $respAX["cod"] = 1;
    $respAX["msj"] = "Hola! Bienvenido  $infCheckLogin[1] $infCheckLogin[2].";
    $respAX["icono"] = "success";
    $_SESSION["alumno"] = $numeroEmpleado;
  }else if($numFilasResAdmin == 1){
    $infCheckLogin = mysqli_fetch_row($resCheckAdmin);
    $respAX["cod"] = 2;
    $respAX["msj"] = "Hola! Bienvenido administrador";
    $respAX["icono"] = "success";
    $_SESSION["alumno"] = $numeroEmpleado; 
  }else{
    $respAX["cod"] = 0;
    $respAX["msj"] = "Error. Favor de intentarlo nuevamente.";
    $respAX["icono"] = "error";
  }

  echo json_encode($respAX);
?>