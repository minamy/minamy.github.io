<?php 
			include 'connect.php';
			
			$query = "SELECT `People` 
					  FROM History
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

?>