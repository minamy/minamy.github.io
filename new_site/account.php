<?php 
    include 'db_interface.php';
    session_start();
    $conn = connect();
	
    $message="";
    $email = $_POST['email'];
    $password = $_POST['pass'];

    $query = "SELECT Username, Password FROM User WHERE Username='$email' and Password='$password'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        $_SESSION['username'] = $email;
        $message = "success";
    } else {
        $message = "failure";
    }

    echo json_encode($message);
    
    mysqli_close($conn);

?>