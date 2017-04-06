<?php 
        session_start();
        include 'db_interface.php';
        $conn = connect();

        $user = "";
        if(isset($_SESSION['username'])) {
            $timetable = json_decode(stripslashes($_POST['timetable']));
            $serTimetable = serialize($timetable);

            $query = "SELECT Timetable FROM User WHERE Username='{$_SESSION['username']}'";
            $result = mysqli_query($conn, $query);
            if (mysqli_num_rows($result) > 0) {
                $sql = "UPDATE User SET Timetable='$serTimetable' WHERE Username='{$_SESSION['username']}'";
                if (mysqli_query($conn, $sql)) {
                    echo json_encode("success");
                } else {
                    echo json_encode("failure");
                }
            } else {
                echo json_encode("failure");
            }
		}
        mysqli_close($conn);
?>