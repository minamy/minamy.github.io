var canvas;
var c;
var canvaswidth;
var canvasheight;
var startx;
var starty;
var m6 = false;
var m7 = false;
var m8 = false;
var m9 = false;
var m10 = false;
var m11 = false;
var m12 = false;
var m13 = false;
var m14 = false;
var m15 = false;
var m16 = false;
var m17 = false;
var m18 = false;
var m19 = false;
var m20 = false;
var m21 = false;
var m22 = false;
var tu6 = false;
var tu7 = false;
var tu8 = false;
var tu9 = false;
var tu10 = false;
var tu11 = false;
var tu12 = false;
var tu13 = false;
var tu14 = false;
var tu15 = false;
var tu16 = false;
var tu17 = false;
var tu18 = false;
var tu19 = false;
var tu20 = false;
var tu21 = false;
var tu22 = false;
var w6 = false;
var w7 = false;
var w8 = false;
var w9 = false;
var w10 = false;
var w11 = false;
var w12 = false;
var w13 = false;
var w14 = false;
var w15 = false;
var w16 = false;
var w17 = false;
var w18 = false;
var w19 = false;
var w20 = false;
var w21 = false;
var w22 = false;
var th6 = false;
var th7 = false;
var th8 = false;
var th9 = false;
var th10 = false;
var th11 = false;
var th12 = false;
var th13 = false;
var th14 = false;
var th15 = false;
var th16 = false;
var th17 = false;
var th18 = false;
var th19 = false;
var th20 = false;
var th21 = false;
var th22 = false;
var f6 = false;
var f7 = false;
var f8 = false;
var f9 = false;
var f10 = false;
var f11 = false;
var f12 = false;
var f13 = false;
var f14 = false;
var f15 = false;
var f16 = false;
var f17 = false;
var f18 = false;
var f19 = false;
var f20 = false;
var f21 = false;
var f22 = false;

var counter = 0;

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
        n = number.toString();
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
        counter += 1;
    }
}

function drawRectangle() {
    var x = 54;
    var y = 21;
    var w = 24;
    var h = 24;
    
    for (y = 21; y < 189; y += h) {
        for (x = 54; x <= 480; x += w) {
            c.fillStyle = "red";
            c.fillRect(x, y, w, h);
            c.stroke();
            x += 2;
        }
        y += 2;
    }
    //c.fillStyle = "blue";
    //c.fillRect(80, 21, 24, 24);
    //c.stroke();
    
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
    drawRectangle();
    
}

function touched(event) {
    counter = counter + 1;
    if (startx >= 54 && startx < 78) {
        if (counter % 2 !== 0) {
            m6 = true;
            c.fillStyle = "red";
            c.fillRect(54, 21, 24, 24);
        } else {
            m6 = false;
            c.clearRect(54, 21, 24, 24);
        }
    } else if (startx <= 80 && startx < 104) {
        if (counter % 2 !== 0) {
            m7 = true;
            c.fillStyle = "red";
            c.fillRect(80, 21, 24, 24);
        } else {
            m7 = false;
            c.clearRect(80, 21, 24, 24);
        }
    } else if (startx <= 106 && startx < 130) {
        if (counter % 2 !== 0) {
            m8 = true;
            c.fillStyle = "red";
            c.fillRect(106, 21, 24, 24);
        } else {
            m8 = false;
            c.clearRect(106, 21, 24, 24);
        }
    } else if (startx <= 132 && startx < 156) {
        if (counter % 2 !== 0) {
            m9 = true;
            c.fillStyle = "red";
            c.fillRect(132, 21, 24, 24);
        } else {
            m9 = false;
            c.clearRect(132, 21, 24, 24);
        }
    } else if (startx <= 158 && startx < 182) {
        if (counter % 2 !== 0) {
            m10 = true;
            c.fillStyle = "red";
            c.fillRect(158, 21, 24, 24);
        } else {
            m10 = false;
            c.clearRect(158, 21, 24, 24);
        }
    } else if (startx <= 184 && startx < 208) {
        if (counter % 2 !== 0) {
            m11 = true;
            c.fillStyle = "red";
            c.fillRect(184, 21, 24, 24);
        } else {
            m11 = false;
            c.clearRect(184, 21, 24, 24);
        }
    } else if (startx <= 210 && startx < 234) {
        if (counter % 2 !== 0) {
            m11 = true;
            c.fillStyle = "red";
            c.fillRect(210, 21, 24, 24);
        } else {
            m11 = false;
            c.clearRect(210, 21, 24, 24);
        }
    } else if (startx <= 236 && startx < 260) {
        if (counter % 2 !== 0) {
            m12 = true;
            c.fillStyle = "red";
            c.fillRect(236, 21, 24, 24);
        } else {
            m12 = false;
            c.clearRect(236, 21, 24, 24);
        }
    } else if (startx <= 262 && startx < 286) {
        if (counter % 2 !== 0) {
            m13 = true;
            c.fillStyle = "red";
            c.fillRect(262, 21, 24, 24);
        } else {
            m13 = false;
            c.clearRect(262, 21, 24, 24);
        }
    } else if (startx <= 288 && startx < 312) {
        if (counter % 2 !== 0) {
            m14 = true;
            c.fillStyle = "red";
            c.fillRect(288, 21, 24, 24);
        } else {
            m14 = false;
            c.clearRect(288, 21, 24, 24);
        }
    } else if (startx <= 314 && startx < 338) {
        if (counter % 2 !== 0) {
            m15 = true;
            c.fillStyle = "red";
            c.fillRect(314, 21, 24, 24);
        } else {
            m15 = false;
            c.clearRect(314, 21, 24, 24);
        }
    } else if (startx <= 340 && startx < 364) {
        if (counter % 2 !== 0) {
            m16 = true;
            c.fillStyle = "red";
            c.fillRect(340, 21, 24, 24);
        } else {
            m16 = false;
            c.clearRect(340, 21, 24, 24);
        }
    } else if (startx <= 366 && startx < 390) {
        if (counter % 2 !== 0) {
            m17 = true;
            c.fillStyle = "red";
            c.fillRect(366, 21, 24, 24);
        } else {
            m17 = false;
            c.clearRect(366, 21, 24, 24);
        }
    } else if (startx <= 392 && startx < 416) {
        if (counter % 2 !== 0) {
            m18 = true;
            c.fillStyle = "red";
            c.fillRect(392, 21, 24, 24);
        } else {
            m18 = false;
            c.clearRect(392, 21, 24, 24);
        }
    } else if (startx <= 418 && startx < 440) {
        if (counter % 2 !== 0) {
            m19 = true;
            c.fillStyle = "red";
            c.fillRect(418, 21, 24, 24);
        } else {
            m19 = false;
            c.clearRect(418, 21, 24, 24);
        }
    } else if (startx <= 444 && startx < 460) {
        if (counter % 2 !== 0) {
            m20 = true;
            c.fillStyle = "red";
            c.fillRect(444, 21, 24, 24);
        } else {
            m20 = false;
            c.clearRect(444, 21, 24, 24);
        }
    } else if (startx <= 470 && startx < 486) {
        if (counter % 2 !== 0) {
            m21 = true;
            c.fillStyle = "red";
            c.fillRect(210, 21, 24, 24);
        } else {
            m21 = false;
            c.clearRect(210, 21, 24, 24);
        }
    } else if (startx <= 210 && startx < 234) {
        if (counter % 2 !== 0) {
            m22 = true;
            c.fillStyle = "red";
            c.fillRect(210, 21, 24, 24);
        } else {
            m22 = false;
            c.clearRect(210, 21, 24, 24);
        }
    }
}

function begin() {
	canvas = document.getElementById("table");
	c = canvas.getContext("2d");
    
    canvaswidth = c.canvas.width;
    canvasheight = c.canvas.height;
	
    startx = 0;
    starty = 0;
    /*
    canvas.addEventListener('touchstart', function (event) {
        var touchobj = event.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
        starty = parseInt(touchobj.clientY);
        touched(event);
        event.preventDefault();
    }, false);
    
    canvas.addEventListener('touchend', function (event) {
        var touchobj = event.changedTouches[0]; // reference first touch point for this event
        event.preventDefault();
    }, false);
	*/
	drawTable();
	//setInterval(clock, 18);
}

setTimeout(begin, 100);