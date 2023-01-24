<?php
    require "connection.php";
    
    $query = $connection->prepare("DELETE FROM users where email = '".$_SESSION["email_id"]."'");
    $query->execute();
    header("location: /");
?>