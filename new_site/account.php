<?php 
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
    session_start();
    $conn = connect();
	
    $message="";
    $name = $_POST['name'];
    $password = $_POST['pass'];

    $query = "SELECT `Username`, `Password` FROM `User` WHERE `Username`='$name' and `Password`='$password'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        $_SESSION['username'] = $name;
        $message = "success";
    } else {
        $message = "failure".$name.$password;
    }

    echo json_encode($message);
    echo json_encode($result);
    
    mysqli_close($conn);

?>