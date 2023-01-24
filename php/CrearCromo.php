<?php
require "connection.php";

if (!$_SERVER["REQUEST_METHOD"] == "POST") {
    die();
}

if (isset($_POST["card$card"]) && isset($_POST["price$price"]) && isset($_POST["description$description"])) {
    $card = trim($_POST["card$card"]);
    $price = trim($_POST["price$price"]);
    $description = trim($_POST["description$description"]);
    echo "$card-$price-$description";
    $query = "INSERT INTO cards (nombrecard$card, price$price, description$description) VALUES ('$card', '$price', '$description')";

    try {
        mysqli_query($connection, $query);
        header("location: /");
    } catch (Exception $e) {
        echo "Error: NO card$card.";
    }
}
?>