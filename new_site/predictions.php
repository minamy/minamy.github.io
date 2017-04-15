<!DOCTYPE html>
<html>
<head>
	<title>FitIn | Predictions</title>
	<link href="stylesheet.css" type="text/css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="predictions.js"></script>
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
		<p class="headtext">Predictions</p>
        <form name="main_form" id="main_form">
                <fieldset class="bigaccount-info", id="collapse">
					<label for ="day">Day: 
                    <input name="day" id="day" type="name" placeholder="e.g. Thursday" maxlength="30">
					</label>
					<label for ="hour">Hour: 
                    <input name="hour" id="hour" type="name" placeholder="e.g. 4PM" maxlength="30">
					</label>
                </fieldset>
				<fieldset>
						<input class="btn" type="submit" id="submit" name="submit" value="Predict">
                </fieldset>
				<fieldset class="answer">
					<label id="answer"></label>
				</fieldset>
		</form>
	</body>
</html>