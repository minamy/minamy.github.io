function openMain() {
    document.getElementById("mainmenu").style.left = "0";
}

function openSettings() {
    document.getElementById("usermenu").style.right = "0";
}

document.addEventListener("DOMContentLoaded", function(e){
	document.addEventListener("click", function(e){
		if(!(e.path.filter(function(element){
			return element.id=="mainmenu" || element.id=="menbut";
		}).length)){
			document.getElementById("mainmenu").style.left = "-250px";
		}
		if(!(e.path.filter(function(element){
			return element.id=="usermenu" || element.id=="setbut";
		}).length)){
			document.getElementById("usermenu").style.right = "-250px";
		}
	});
});

