<?php 
		$conn = connect();
		$query = "SELECT `People` 
					FROM `History`
					ORDER BY `Time` DESC 
					LIMIT 1";
		$result = mysqli_query($conn, $query);
		$value = mysqli_fetch_object($result);
		$value = $value->People;
		$count = mysqli_num_rows($result);
		if ($count == 1) {
			echo json_encode($value);
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