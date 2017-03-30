<!DOCTYPE html>
<html>
<head>
	<title>FitIn | Login</title>
	<link href="stylesheet.css" type="text/css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="sweetalert-master/dist/sweetalert.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="loginCheck.js"></script>
	<script src="sweetalert-master/dist/sweetalert.min.js"></script>
	<script>
		document.addEventListener("touchstart", function () { }, true);
	</script>
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
				<a href="timeline.php">Predictions</a>
				<a href="timeline.php">Advised Times</a>
				<a href="timeline.php">History</a>
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
		<h1 style="text-align: center; font-style: italic;">Login</h1>
        <form name="main_form" id="main_form">
                <fieldset class="account-info">
					<label for ="email">E-mail: 
                    <input name="email" id="email" type="email" placeholder="Email address" maxlength="30">
					</label>
					<label for ="password">Password: 
                    <input name="password" id="password" type="password" placeholder="Password" maxlength="25">
					</label>
                </fieldset>
				<fieldset>
						<input class="btn" type="submit" id="submit" name="submit" value="Login">
						<h4 style="text-align:center; margin: 15px"> Don't have an account? <a href="create_account.php"> Sign up</a></h4>
                </fieldset>
		</form>
	</body>
</html>