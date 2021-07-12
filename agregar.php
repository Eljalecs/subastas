<?php
include('conexion.php');
$agregar=$_POST['agregar'];
//$agregar=21200;
if(!empty($agregar)){
    //$query="UPDATE into subasta(name) VALUES ('$agregar') WHERE id=1";
    $query="UPDATE subasta SET price=$agregar WHERE id = 1";
    $result=mysqli_query($connection,$query);
    /*
    if(!$result) {
        die('algo ha fallado');
    }else{
        echo'todo bien todo bonito';
    }*/
}