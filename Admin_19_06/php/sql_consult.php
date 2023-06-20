<?php
	$con = mysqli_init();
	mysqli_ssl_set($con, NULL, NULL, "C:/xampp/mysql/cacert.pem", NULL, NULL);
	mysqli_real_connect($con, "escomselecdbs.mysql.database.azure.com", "diegopipebran", "ikc83mfL", "tdaw", 3306, MYSQLI_CLIENT_SSL);
	if (!$con) {
		die("Error de conexión: " . mysqli_connect_error());
	}else{
		echo("correcto");
	}

	$sql = "SELECT * FROM docente";
	$result = mysqli_query($con, $sql);
	if ($result) {
		while ($row = mysqli_fetch_assoc($result)) {
			echo "numEmpleado: " . $row["numeroEmpleado"] ."nombre: " . $row["nombre"] . "primer apellido: " . $row["primerApellido"] ."<br>" . "contraseña" . $row["contrase�a"];
		}
	} else {
		echo "Error en la consulta: " . mysqli_error($conn);
	}



?>
