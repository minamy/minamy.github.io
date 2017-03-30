<?php
    $host="93.188.160.86";      
    $username="u771566540_ammin"; 
    $password="fitinbathunigym1234"; 
    $db_name="u771566540_fitin"; 

    $link= mysqli_connect($host, $username, $password, $db_name)or die("cannot connect"); 
    if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
    }
    $query = "INSERT INTO `History` (`Time`, `People`) 
    VALUES ('".$_GET["Time"]."','".$_GET["People"]."')"; 

    mysqli_query($link,$query);
    mysqli_close($link);
?>