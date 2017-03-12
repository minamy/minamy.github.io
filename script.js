var canvas;
var c;

function drawTable() {
    
}

function begin() {
	canvas = document.getElementById("table");
	c = canvas.getContext("2d");
	c.lineWidth = 1.5;
	
    /*
	canvas.addEventListener('mousewheel', function (event) {
		mwheel(event);
		event.returnValue = false;
		return false;
	}, false);
	
	canvas.addEventListener('mousemove', function (event) {
		mmove(event);
		return false;
	}, false);
	
	canvas.addEventListener('mouseup', function (event) {
		mup(event);
		return false;
	}, false);
	
	canvas.addEventListener('mousedown', function (event) {
		mdown(event);
		return false;
	}, false);
	
	canvas.addEventListener('mouseout', function (event) {
		mout(event);
		return false;
	}, false);
    */
	
	
	
	drawTable();
	//setInterval(clock, 18);
}

setTimeout(begin, 100);