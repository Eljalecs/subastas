<?php
include('conexion.php');
$query = "SELECT price FROM subasta WHERE id =1";
$result=mysqli_query($connection, $query);
if(!$result){
    die('query fallado');
}
while ($fila=$result->fetch_assoc()){
    $salida=$fila['price'];
}
$jsonstring=json_encode($salida);
echo $jsonstring;


//$jsonstring=json_encode($json);
//echo $jsonstring;