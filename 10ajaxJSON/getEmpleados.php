<?php
header('Content-Type: application/json');
$q = intval($_GET['q']);
$indice = intval($_GET['oculto']);
$ordenacion =  $_GET["ordenacion"];

$con = mysqli_connect('localhost', 'root', '', 'ejemplodept');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_set_charset($con, "utf8");

$sql = "SELECT * FROM empleados". " " . $ordenacion." LIMIT " . $indice . "," . $q;
$result = mysqli_query($con, $sql);

$datos = [];
while ($row = mysqli_fetch_assoc($result)) {
    array_push($datos, $row);
}
echo json_encode($datos);
mysqli_close($con);
