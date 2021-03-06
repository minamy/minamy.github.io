function openMain() {
    document.getElementById("mainmenu").style.left = "0";
}

function openSettings() {
    document.getElementById("usermenu").style.right = "0";
}

function logIn(){
	var arr = document.querySelectorAll(".login");
	for (var i = 0; i < arr.length; i++){
		arr[i].style.paddingTop = "8px";
		arr[i].style.paddingBottom = "8px";
		arr[i].style.fontSize = "30px";
	}
	arr = document.querySelectorAll(".logout");
	for (var i = 0; i < arr.length; i++){
		arr[i].style.paddingTop = "0";
		arr[i].style.paddingBottom = "0";
		arr[i].style.fontSize = "0";
	}
}

function logOut(){
	var arr = document.querySelectorAll(".login");
	for (var i = 0; i < arr.length; i++){
		arr[i].style.paddingTop = "0";
		arr[i].style.paddingBottom = "0";
		arr[i].style.fontSize = "0";
	}
	arr = document.querySelectorAll(".logout");
	for (var i = 0; i < arr.length; i++){
		arr[i].style.paddingTop = "8px";
		arr[i].style.paddingBottom = "8px";
		arr[i].style.fontSize = "30px";
	}
}

document.addEventListener("DOMContentLoaded", function(e){
	document.addEventListener("click", function(e){
		element = e.target;
		if (element.parentElement == null || !(element.parentElement.id=="mainmenu" || element.id=="menbut")){
			document.getElementById("mainmenu").style.left = "-250px";
		}
		if (element.parentElement == null || !(element.parentElement.id=="usermenu" || element.id=="setbut")){
			document.getElementById("usermenu").style.right = "-250px";
		}
	});
	if (loggedIn){
		logIn();
	} else {
		logOut();
	}
});
