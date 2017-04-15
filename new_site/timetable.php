<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="expires" content="Thu, 31 Dec 2020 23:59:59 GMT" />
	<meta name="description" content="Make Bath Uni Gym Great Again" />
	<meta name="keywords" content="fitin, gym, bath uni, uni, bath, team bath, university of bath" />
	<meta name="robots" content="index, follow" />
	<title>FitIn | Timetable</title>
	<link href="stylesheet.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="timetable.js"></script>
	<script type="text/javascript">
		var loggedIn = <?php
			session_start();
			if(!isset($_SESSION['username']))
			{
				echo "false";
			} else {
				echo "true";
			}
		?>
	</script>
</head>
	<body>
		<header class="title">
				<img class="main" id="menbut" onclick="openMain()" src="Images/menu.png">
				<a href="index.php"><img class="logo" src="Images/logo.png"></a>
				<img class="settings" id="setbut" onclick="openSettings()" src="Images/settings.png">
		</header>
		<div class="menu">
			<div class="mainmenu" id="mainmenu">
				<a href="index.php">Current Space</a>
				<a href="predictions.php">Predictions</a>
				<a href="timeline.php?advice=true">Advised Times</a>
				<a href="timeline.php?advice=false">Timeline</a>
				<a class="logout" href="login.php">Log In</a>
				<a class="login" href="logout.php">Log Out</a>
				<a href="create_account.php">New Account</a>
				<a class="login" href="edit_account.php">Edit Account</a>
				<a class="login" href="timetable.php">Edit Timetable</a>
			</div>
		</div>
		<div class="menu">
			<div class="usermenu" id="usermenu">
				<a class="logout" href="login.php">Log In</a>
				<a class="login" href="logout.php">Log Out</a>
				<a href="create_account.php">New Account</a>
				<a class="login" href="edit_account.php">Edit Account</a>
				<a class="login" href="timetable.php">Edit Timetable</a>
			</div>
		</div>
		<canvas id="table" width="530" height="180"></canvas>
	</body>
</html>