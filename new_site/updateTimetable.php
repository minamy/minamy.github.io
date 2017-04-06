<?php 
        session_start();
        $conn = connect();
        $input = json_decode(file_get_contents("php://input"));
	
        $user = "";
        if(isset($_SESSION['username'])) {
            $timetable = $input->timetable;
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