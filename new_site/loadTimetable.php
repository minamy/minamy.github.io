<?php 
        session_start();
        $conn = connect();

        if (isset($_SESSION['username'])) {
            $query = "SELECT Timetable FROM User WHERE Username='{$_SESSION['username']}' or Email='{$_SESSION['username']}'";
            $result = mysqli_query($conn, $query);
            if (mysqli_num_rows($result) > 0) {
                $obj = mysqli_fetch_object($result);
                $obj = $obj->Timetable;
                $timetable = unserialize($obj);
                echo json_encode($timetable);
            } else {
                echo "fail";
            }
        }
        mysqli_close($conn);

        function connect(){
            $url = "93.188.160.86";
            $username = "u771566540_ammin";
            $password = "fitinbathunigym1234";
            $db = "u771566540_fitin";
            $connect = new mysqli($url, $username, $password, $db)or die("cannot connect"); 
            if ($connect->connect_error) {
                die("Connection failed: " . $connect->connect_error);
            }
            return  $connect;
        }

?>