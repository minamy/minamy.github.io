var canvas;
var c;
var canvaswidth;
var canvasheight;

function drawVerticalLine() {
    var w = 53;
    while (w <= 500) {
        c.moveTo(w, 5);
        c.lineTo(w, canvasheight);
        c.stroke();
        w = w + 26;
    }
}

function drawHorizontalLine() {
    var h = 20;
    while (h <= 189) {
        c.moveTo(5, h);
        c.lineTo(canvaswidth - 5, h);
        c.stroke();
        h = h + 26;
    }
}

function drawNumber() {
    var pos = 63;
    var number = 6;
    var n;
    c.font = "15px Arial";
    while (pos <= 480) {
        n=number.toString();
        c.fillText(n, pos, 18);
        pos = pos + 26;
        number += 1;
    }
}

function drawDay() {
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var counter = 0;
    var pos = 38;
    c.font = "18px Arial";
    while (counter < 7) {
        c.fillText(days[counter], 12, pos);
        pos = pos + 26;
        counter+=1;
    }
}

function drawTable() {
    //c.fillRect(2, 2, canvaswidth-4, canvasheight-4);
    
    //outline
    c.moveTo(5, 5);
    c.lineTo(5, canvasheight);
    c.stroke();
    c.moveTo(5, 5);
    c.lineTo(canvaswidth - 5, 5);
    c.stroke();
    c.moveTo(canvaswidth - 5, 5);
    c.lineTo(canvaswidth - 5, canvasheight);
    c.stroke();
    c.moveTo(5, canvasheight);
    c.lineTo(canvaswidth - 5, canvasheight);
    c.stroke();
    
    
    drawVerticalLine();
    drawHorizontalLine();
    drawNumber();
    drawDay();
    
}

function begin() {
	canvas = document.getElementById("table");
	c = canvas.getContext("2d");
    
    canvaswidth = c.canvas.width;
    canvasheight = c.canvas.height;
	
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