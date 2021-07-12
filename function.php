<?php
include('conexion.php');
if(isset($_POST["register"]))
{
    if($_POST["register"]=="regNewUser"){
        $email=$_POST['email'];
        $passNewUser=$_POST['password'];
        $query="INSERT into users(email,password) VALUES ('$email','$passNewUser')";
    $respuesta=mysqli_query($connection,$query);
    if(!$respuesta){
        die('no se registró');
    }
    echo'se registró correcto';
    }
}/*
if(isset($_POST["login"]))
{
    if($_POST["login"]=="logUser"){
        //session_start();
        $emailLog=$_POST['emailLog'];
        $passwordLog=$_POST['passwordLog'];
        $query="SELECT  email FROM users WHERE email=$emailLog AND password=$passwordLog";
    $answerLog=mysqli_query($connection,$query);
    if(!$answerLog->num_rows==1){
        echo"registro correcto";
    }
    else{
        echo'usuario no existe';
    }
    }
}


$emailLog='ana@ana.com';
$passwordLog=12345;
$query="SELECT  email FROM users WHERE email=$emailLog AND password=$passwordLog";
$answerLog=mysqli_query($connection,$query);
if(!$answerLog){
    $response = array(
        'response'=>'false'
    );
}
else{
    $usuario=mysqli_fecth_assoc($answerLog);
    
}*/?>