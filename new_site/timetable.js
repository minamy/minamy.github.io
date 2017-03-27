var canvas;
var c;
var on = 0;
var offsetX = 10;
var offsetY = 10;
var columnWidth = 0;
var rowWidth = 0;
var array = [[]];
var rows = 4*18;

function setColumnWidth() {
    columnWidth = (canvas.width-2*offsetX) / (rows+4);
}

function setRowWidth() {
    rowWidth = (canvas.height-2*offsetY) / 8;
}

function drawVerticalLine() {
    var i;
    c.beginPath();
    for (i = 0; i <= rows+4; i += 4) {
        c.moveTo(i*columnWidth+offsetX, offsetY);
        c.lineTo(i*columnWidth+offsetX, canvas.height - offsetY);
    }
    c.stroke();
}

function drawHorizontalLine() {
    var j;
    for (j = 0; j <= 9; j += 1) {
        c.moveTo(offsetX, j*rowWidth+offsetY);
        c.lineTo(canvas.width - offsetX, j*rowWidth+offsetY);
        c.stroke();
    }
}

function drawNumber() {
    var number = 6,
        n,
        i;
    c.font = "19px Arial";
    for (i = offsetX + columnWidth * 5.2; i < columnWidth * (rows+4); i += columnWidth*4) {
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
        c.fillText(days[counter], offsetX + columnWidth * 0.1, j-15);
        counter += 1;
    }
}

function fillTiles(){
    c.fillStyle="#f00";
    for (var i = 0; i < rows; i++){
        for (var j = 0; j < 7; j++){
            if (array[i][j]){
                c.fillRect((i+4)*columnWidth+offsetX-1, (j+1)*rowWidth+offsetY-1, columnWidth+2, rowWidth+2)
            }
        }
    }
    c.fillStyle="#000";
}

function drawTable() {
    //c.save();
    //c.rotate(Math.PI/2);
    c.clearRect(0, 0, canvas.width, canvas.height)
    fillTiles();
    drawVerticalLine();
    drawHorizontalLine();
    drawNumber();
    drawDay();
    //c.restore();
}

function booleanTable() {
    var i = 0,
        j = 0;
    for (i = 0; i < rows; i += 1) {
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
        
    arrayIndexX = parseInt((touchX - offsetX) / (columnWidth*4))*4-4;
    arrayIndexY = parseInt((touchY - offsetY) / rowWidth)-1;
    if (arrayIndexX >= 0 && arrayIndexY >= 0 && arrayIndexX < rows && arrayIndexY < 7) {
        var b = array[arrayIndexX][arrayIndexY];
        array[arrayIndexX+0][arrayIndexY] = !b;
        array[arrayIndexX+1][arrayIndexY] = !b;
        array[arrayIndexX+2][arrayIndexY] = !b;
        array[arrayIndexX+3][arrayIndexY] = !b;
    }
    drawTable();
}

window.onresize = function(e){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
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
    
    canvas.addEventListener("mousedown", function (event) {
        touched(canvas, c, event);
    }, false);
    
    canvas.addEventListener("touchstart", function (event) {
        touched(canvas, c, event);
    }, false);
    
    setColumnWidth();
    setRowWidth();
    booleanTable();
    window.onresize();
}
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    begin();
}