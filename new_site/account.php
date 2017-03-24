<?php 
    include 'db_interface.php';
    $conn = connect();

    $email = $_POST['email'];
    $password = $_POST['pass'];
    $query = "SELECT Username, Password FROM User WHERE Username='$email' and Password='$password'";

    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        echo json_encode("success");
    }
    mysqli_close($conn);

?>