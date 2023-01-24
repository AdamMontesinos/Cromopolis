<?php

$conexion = new mysqli('localhost','adam','1234','cromopolis');

if (!$conexion){
    echo "Error en conexion";
    exit();
}else{
    echo "Conectado";
}

