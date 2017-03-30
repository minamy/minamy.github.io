<?php 
			include "db_interface.php";
            session_start();
            $conn = connect();
			$pass = $_POST['pass'];
            $newPass = $_POST['newPass'];
            if (isset($_SESSION['username'])){
                $query = "SELECT Password FROM User WHERE Username='{$_SESSION['username']}'";
                $result = mysqli_query($conn, $query);
                if (mysqli_num_rows($result) > 0) {
                    $value = mysqli_fetch_object($result);
                    $correctPass = $value->Password;
                    if ($pass == $correctPass) {
                        $sqlUpdate = "UPDATE User SET Password='$newPass' WHERE Username='{$_SESSION['username']}'";
                        if (mysqli_query($conn, $sqlUpdate)) {
                            echo json_encode("success");
                        }
                    } else {
                        echo json_encode("failure");
                    }
                } else {
                    echo json_encode("failure");
                }
            }
            mysqli_close($conn);
?>