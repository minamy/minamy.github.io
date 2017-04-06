var canvas;
var c;
var on = 0;
var offsetX = 1;
var offsetY = 1;
var columnWidth = 0;
var rowWidth = 0;
var array = [[]];
var rows = 4*18;
var cWidth = 0;
var cHeight = 0;
var drag = false;
var scroll = 0;
var dx = -1;
var dy = -1;
var mx = -1;
var my = -1;

function setColumnWidth() {
    columnWidth = (cWidth-2*offsetX) / (rows+4);
}

function setRowWidth() {
    rowWidth = (cHeight-2*offsetY) / 8;
}

function drawVerticalLine() {
    var i;
    c.beginPath();
    var zoom = columnWidth < 30 ? columnWidth < 15 ? 4 : 2 : 1;
    for (i = 0; i <= rows+zoom; i += zoom) {
        if (i < 1 || i > 3){
            c.moveTo(i*columnWidth+offsetX + scroll, offsetY);
            c.lineTo(i*columnWidth+offsetX + scroll, cHeight - offsetY);
        }
    }
    c.stroke();
}

function drawHorizontalLine() {
    var j;
    for (j = 0; j <= 9; j += 1) {
        c.moveTo(offsetX + scroll, j*rowWidth+offsetY);
        c.lineTo(columnWidth * 76 - offsetX + scroll, j*rowWidth+offsetY);
        c.stroke();
    }
}

function drawNumber() {
    var number = 6,
        n,
        i;
    c.font = "19px Arial";
    for (i = offsetX + 5 + columnWidth*4; i < columnWidth * (rows+4); i += columnWidth*4) {
        n = number.toString();
        c.fillText(n, i + scroll, offsetY + rowWidth * 0.7);
        number += 1;
    }
}

function drawDay() {
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        counter = 0,
        j;
    c.font = "15px Arial";
    for (j = offsetY + rowWidth * 1.7; j <= rowWidth * 8 + offsetY; j += rowWidth) {
        c.fillText(days[counter], offsetX + columnWidth * 0.1 + scroll, j-15);
        counter += 1;
    }
}

function fillTiles(){
    c.fillStyle="#f00";
    for (var i = 0; i < rows; i++){
        for (var j = 0; j < 7; j++){
            if (array[j][i]){
                c.fillRect((i+4)*columnWidth+offsetX-1 + scroll, (j+1)*rowWidth+offsetY-1, columnWidth+2, rowWidth+2)
            }
        }
    }
    c.fillStyle="#000";
}

function drawTable() {
    c.save();
    c.rotate(Math.PI/2);
    c.translate(0, -cHeight);
    c.clearRect(0, 0, cWidth, cHeight)
    fillTiles();
    drawVerticalLine();
    drawHorizontalLine();
    drawNumber();
    drawDay();
    c.restore();
}

function booleanTable() {
    var i = 0,
        j = 0;
    for (j = 0; j < 7; j += 1) {
        array[j] = [];
        for (i = 0; i < rows; i += 1) {
            array[j][i] = false;
        }
    }
}

function singleToDouble(array){
    var arr = [];
    var j = 0;
    for (var k = 0; k < 7; k++){
        arr[k] = [];
        j += 24;
        for (var i = 0; i < 72; i++){
            arr[k][i] = array[j];
            j++;
        }
    }
    return arr;
}

function doubleToSingle(array){
    var arr = [];
    var j = 0;
    for (var k = 0; k < array.length; k++){
        for (var i = 0; i < 24; i++){
            arr[j] = true;
            j++;
        }
        for (var i = 0; i < array[k].length; i++){
            arr[j] = array[k][i];
            j++;
        }
    }
    return arr;
}

function sendBools() {
    var data = JSON.stringify({ timetable: doubleToSingle(array) });
	var request = new XMLHttpRequest();
	request.open('POST', 'updateTimetable.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
			}
		} else {
			// We reached our target server, but it returned an error
			console.log("FUCK");
		}
	};
	request.send(data);
}

function loadTimetable() {
    var data = JSON.stringify({  });
	var request = new XMLHttpRequest();
	request.open('POST', 'loadTimetable.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
                var resp = JSON.parse(request.response);
                array = singleToDouble(resp);
                drawTable();
                setInterval(sendBools, 1000);
			}
		} else {
			// We reached our target server, but it returned an error
			console.log("FUCK");
		}
	};
	request.send(data);
}

function touched(canvas, c, event) {
    drag = true;
    var rect = event.currentTarget.getBoundingClientRect();
    dx = event.clientY - rect.top;
    dy = cHeight - (event.clientX - rect.left);
    mx = event.clientY - rect.top;
    my = cHeight - (event.clientX - rect.left);
}

function mup(event){
    var rect = event.currentTarget.getBoundingClientRect(),
        touchY = cHeight - (event.clientX - rect.left),
        touchX = event.clientY - rect.top,
        arrayIndexX = 0,
        arrayIndexY = 0,
        i = 0,
        xCood = 0,
        yCood = 0;
    var dist = 0;
    if (drag) {
        dist = Math.sqrt((touchX-dx)*(touchX-dx)+(touchY-dy)*(touchY-dy));
    }
    if (dist < 50){
        var zoom = columnWidth < 30 ? columnWidth < 15 ? 4 : 2 : 1;
        arrayIndexX = parseInt((touchX - offsetX - scroll) / (columnWidth*zoom))*zoom-4;
        arrayIndexY = parseInt((touchY - offsetY) / rowWidth)-1;
        if (arrayIndexX >= 0 && arrayIndexY >= 0 && arrayIndexX < rows && arrayIndexY < 7) {
            var b = array[arrayIndexY][arrayIndexX];
            for (var i = 0; i < zoom; i++){
                array[arrayIndexY][arrayIndexX+i] = !b;
            }
        }
    }
    drag = false;
    dx = -1;
    dy = -1;
    mx = -1;
    my = -1;
    drawTable();
}

function mmove(event){
    if (drag){
        var rect = event.currentTarget.getBoundingClientRect();
        x = event.clientY - rect.top;
        y = cHeight - (event.clientX - rect.left);
        scroll += x - mx;
        if (scroll > 0) scroll = 0;
        if (scroll < -columnWidth * 76 + cWidth - 2 * offsetX) scroll = -columnWidth * 76 + cWidth - 2 * offsetX;
        mx = x;
        my = y;
        drawTable();
    }
}

function mwheel(e){
    var delta = columnWidth * (e.wheelDelta * (0.0002));
    columnWidth += 2 * delta
    if (columnWidth < 10) columnWidth = 10;
    if (columnWidth > 100) columnWidth = 50;
    scroll -= 76*delta;
    if (scroll > 0) scroll = 0;
    if (scroll < -columnWidth * 76 + cWidth - 2 * offsetX) scroll = -columnWidth * 76 + cWidth - 2 * offsetX;
    drawTable();
}

window.onresize = function(e){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
	cHeight = window.innerWidth;
	cWidth = window.innerHeight - 100;
    setColumnWidth();
    setRowWidth();
    drawTable();
};

function begin() {
	canvas = document.getElementById("table");
    c = canvas.getContext("2d");
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    canvaswidth = canvas.width;
    canvasheight = canvas.height;
    cWidth = canvas.width;
    cHeight = canvas.height;
    
	canvas.addEventListener('mousewheel',function(event){
		mwheel(event);
		event.returnValue = false;
		return false; 
	}, false);
	
    canvas.addEventListener("mousedown", function (event) {
        touched(canvas, c, event);
		return false; 
    }, false);
    
    canvas.addEventListener("touchstart", function (event) {
        touched(canvas, c, event);
		return false; 
    }, false);
    
	canvas.addEventListener('mousemove',function(event){
		mmove(event);
		return false; 
	}, false);
	
	canvas.addEventListener('mouseup',function(event){
		mup(event);
		return false; 
	}, false);
	
	canvas.addEventListener('touchmove',function(event){
		mmove(event);
		return false; 
	}, false);
	
	canvas.addEventListener('touchend',function(event){
		mup(event);
		return false; 
	}, false);
	
    
    setColumnWidth();
    setRowWidth();
    booleanTable();
    window.onresize();
    loadTimetable();
}
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    begin();
}