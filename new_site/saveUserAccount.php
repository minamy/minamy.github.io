<?php 
        include 'db_interface.php';
        $conn = connect();

        // get user data
        $email = $_POST['email'];
        $password = $_POST['pass'];
        $timetable = array_fill(0, 672, false);
        $serTimetable = serialize($timetable);

        $query = "SELECT Username FROM User WHERE Username='$email'";
        $result = mysqli_query($conn, $query);
        $sql = "INSERT INTO User (Username, Email, Password, Timetable)
        VALUES ('$email', '$email', '$password', '$serTimetable')";
        if (mysqli_num_rows($result) > 0){
	        echo json_encode("success");
        } else {
	        mysqli_query($conn, $sql);
        }
        mysqli_close($conn);
?>