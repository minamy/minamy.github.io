var canvas;
var c;
var canvaswidth;
var canvasheight;
var on = 0;
var offsetX = 10;
var offsetY = 10;
var columnWidth = 0;
var rowWidth = 0;
var array = [[]];

function setColumnWidth() {
    columnWidth = 35;
}

function setRowWidth() {
    rowWidth = 25;
}

function drawVerticalLine() {
    var i;
    for (i = offsetX; i <= columnWidth * 18 + offsetX; i += columnWidth) {
        c.moveTo(i, offsetY);
        c.lineTo(i, canvasheight - offsetY);
        c.stroke();
    }
}

function drawHorizontalLine() {
    var j;
    for (j = offsetY; j <= rowWidth * 8 + offsetY; j += rowWidth) {
        c.moveTo(offsetX, j);
        c.lineTo(canvaswidth - offsetX, j);
        c.stroke();
    }
}

function drawNumber() {
    var number = 6,
        n,
        i;
    c.font = "19px Arial";
    for (i = offsetX + columnWidth * 1.2; i < columnWidth * 18; i += columnWidth) {
        n = number.toString();
        c.fillText(n, i, offsetY + rowWidth * 0.7);
        number += 1;
    }
}

function drawDay() {
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        counter = 0,
        j;
    c.font = "15px Arial";
    for (j = offsetY + rowWidth * 1.7; j <= rowWidth * 8 + offsetY; j += rowWidth) {
        c.fillText(days[counter], offsetX + columnWidth * 0.1, j);
        counter += 1;
    }
}

function drawTable() {
    drawVerticalLine();
    drawHorizontalLine();
    drawNumber();
    drawDay();
}

function booleanTable() {
    var i = 0,
        j = 0;
    for (i = 0; i < 64; i += 1) {
        array[i] = [];
        for (j = 0; j < 7; j += 1) {
            array[i][j] = false;
        }
    }
}

function sendBools() {
    var data = JSON.stringify({value: "setTimetable", table: array});
}

function touched(canvas, c, event) {
    var rect = event.currentTarget.getBoundingClientRect(),
        touchX = event.clientX - rect.left,
        touchY = event.clientY - rect.top,
        arrayIndexX = 0,
        arrayIndexY = 0,
        i = 0,
        xCood = 0,
        yCood = 0;
        
    arrayIndexX = parseInt((touchX - offsetX) / columnWidth);
    arrayIndexY = parseInt((touchY - offsetY) / rowWidth);
    if (arrayIndexX > 0 && arrayIndexY > 0) {
        on += 1;
        xCood = arrayIndexX * columnWidth + offsetX;
        yCood = arrayIndexY * rowWidth + offsetY;
        if (on % 2 !== 0) {
            c.fillStyle = "red";
            for (i = 0; i < 4; i += 1) {
                array[arrayIndexX + 1][arrayIndexY] = true;
            }
            c.fillRect(xCood, yCood, columnWidth, rowWidth);
            c.stroke();
        } else {
            for (i = 0; i < 4; i += 1) {
                array[arrayIndexX + 1][arrayIndexY] = false;
            }
            c.clearRect(xCood, yCood, columnWidth, rowWidth);
        }
    }
}

function begin() {
	canvas = document.getElementById("table");
    c = canvas.getContext("2d");
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    canvaswidth = canvas.width;
    canvasheight = canvas.height;
    
    canvas.addEventListener("mousedown", function (event) {
        touched(canvas, c, event);
    }, false);
    
    canvas.addEventListener("touchstart", function (event) {
        touched(canvas, c, event);
    }, false);
    
    setColumnWidth();
    setRowWidth();
    booleanTable();
    drawTable();
}
setTimeout(begin, 100);