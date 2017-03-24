<?php

        $host="93.188.160.86";      
        $username="u771566540_ammin"; 
        $password="fitinbathunigym1234"; 
        $db_name="u771566540_fitin"; 

        $conn = mysqli_connect($host, $username, $password, $db_name)or die("cannot connect"); 
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
?>
