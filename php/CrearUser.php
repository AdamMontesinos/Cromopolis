<?php

require "comprobacionconexion.php";

if (!$_SERVER["REQUEST_METHOD"] == "POST"){
    die();
}


if(isset($_POST["user"]) && isset($_POST["email"]) && isset($_POST["pwd"])){
    $name = trim($_POST["user"]);
    $email = trim($_POST["email"]);
    $contra = trim($_POST["pwd"]);
    $contrahash = password_hash($contra, PASSWORD_DEFAULT);

    echo $name;
    echo $email;

    $query = $conexion->prepare("INSERT INTO user(nom, email, password) VALUES( ?, ?, ? );"); 
    $query->bind_param("sss", $name, $email, $contrahash);
    $query->execute();
    echo "<br>completao";
    $conexion->close();
}