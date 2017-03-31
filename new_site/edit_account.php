<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="expires" content="Thu, 31 Dec 2020 23:59:59 GMT" />
	<meta name="description" content="Make Bath Uni Gym Great Again" />
	<meta name="keywords" content="fitin, gym, bath uni, uni, bath, team bath, university of bath" />
	<meta name="robots" content="index, follow" />
	<title>FitIn | Edit Account</title>
	<link href="stylesheet.css" type="text/css" rel="stylesheet">
	<link href="style.css" type="text/css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
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
	<script type="text/javascript" src="editAccount.js"></script>
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
		<h1 class="headtext">Edit Account</h1>
		<form name="frmEditAcc" id="frmEditAcc" method="post">
			<fieldset class="account-info">
					<label for ="curPass">Confirm Current Password:
					<input name="accPass" id="accPass" type="password" placeholder="Enter current password..." maxlength="25">
					</label>
					<label for ="newPass">New Password:
					<input name="accNewPass" id="accNewPass" type="password" placeholder="Enter new password..." maxlength="25">
					</label>
					<label for ="confNewPass">Confirm New Password:
					<input name="accConfNewPass" id="accConfNewPass" type="password" placeholder="Confirm new password..." maxlength="25">
					</label>
			</fieldset>
			<fieldset>
				<input class="btn" type="submit" id="accSubmit" name="accSubmit" value="Update">
			</fieldset>
		</form>
	</body>
</html>