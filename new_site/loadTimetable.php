<?php 
        session_start();
        include 'db_interface.php';
        $conn = connect();

        if (isset($_SESSION['username'])) {
            $query = "SELECT Timetable FROM User WHERE Username='{$_SESSION['username']}'";
            $result = mysqli_query($conn, $query);
            if (mysqli_num_rows($result) > 0) {
                $obj = mysqli_fetch_object($result);
                $timetable = unserialize($obj->Timetable);
                echo json_encode($timetable);
            } else {
                echo "fail";
            }
        }
        mysqli_close($conn);



?>