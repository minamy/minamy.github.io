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

    $query1 = "SELECT `Username`, `Password` FROM `User` WHERE `Username`='$name' and `Password`='$password'";
    $result1 = mysqli_query($conn, $query1);
    $count1 = mysqli_num_rows($result1);
    $query2 = "SELECT `Username`, `Email`, `Password` FROM `User` WHERE `Email`='$name' and `Password`='$password'";
    $result2 = mysqli_query($conn, $query2);
    $count2 = mysqli_num_rows($result2);
    $email = mysqli_fetch_object($result2);
    $email = $email->Email;

    if ($count1 == 1) {
        $_SESSION['username'] = $name;
        $message = "success";
        $result= $result1;
    } elseif ($count2 == 1) {
        $_SESSION['username'] = $email;
        $message = "success";
        $result = $result2;
    } else {
        $message = "failure".$name.$password;
    }

    echo json_encode($message);
    echo json_encode($result);
    
    mysqli_close($conn);

?>