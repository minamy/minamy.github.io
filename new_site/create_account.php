<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="Thu, 31 Dec 2020 23:59:59 GMT" />
    <meta name="description" content="Make Bath Uni Gym Great Again" />
    <meta name="keywords" content="fitin, gym, bath uni, uni, bath, team bath, university of bath" />
    <meta name="robots" content="index, follow" />
	<title>FitIn | Create Account</title>
	<link href="stylesheet.css" type="text/css" rel="stylesheet">
	<link href="style.css" type="text/css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="userAccount.js"></script>
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
				<a href="timeline.php?advice=false">Predictions</a>
				<a href="timeline.php?advice=true">Advised Times</a>
				<a href="timeline.php?advice=false">History</a>
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
		<h1 class="headtext">Create New Account</h1>
        <form name="frmAcc" id="frmAcc" method="post">
			<fieldset class="account-info">
					<label for ="email">Username:
					<input name="accName" id="accName" type="name" placeholder="Username" maxlength="30">
					</label>
					<label for ="remail">E-mail:
					<input name="accrEmail" id="accEmail" type="email" placeholder="Repeat E-mail" maxlength="30">
					</label>
					<label for ="password">Password:
					<input name="accPassword" id="accPassword" type="password" placeholder="Password" maxlength="25">
					</label>
					<label for ="rpassword">Repeat Password:
					<input name="accrPassword" id="accrPassword" type="password" placeholder="Repeat Password" maxlength="25">
					</label>
			</fieldset>
			<fieldset>
				<input class="btn" type="submit" id="accSubmit" name="accSubmit" value="Submit">
			</fieldset>
		</form>
		
	</body>
</html>