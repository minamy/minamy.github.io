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
var sa6 = false;
var sa7 = false;
var sa8 = false;
var sa9 = false;
var sa10 = false;
var sa11 = false;
var sa12 = false;
var sa13 = false;
var sa14 = false;
var sa15 = false;
var sa16 = false;
var sa17 = false;
var sa18 = false;
var sa19 = false;
var sa20 = false;
var sa21 = false;
var sa22 = false;
var su6 = false;
var su7 = false;
var su8 = false;
var su9 = false;
var su10 = false;
var su11 = false;
var su12 = false;
var su13 = false;
var su14 = false;
var su15 = false;
var su16 = false;
var su17 = false;
var su18 = false;
var su19 = false;
var su20 = false;
var su21 = false;
var su22 = false;

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
            c.fillStyle = "white";
            c.fillRect(x, y, w, h);
            c.stroke();
            x += 2;
        }
        y += 2;
    }
    c.fillStyle = "blue";
    c.fillRect(54, 47, 24, 24);
    c.stroke();
    
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
    //drawRectangle();
    
}

function touched(canvas, event) {
    counter = counter + 1;
    var rect = canvas.getBoundingClientRect();
    startx = event.clientX - rect.left;
    starty = event.clientY - rect.top;
    
    if (startx >= 54 && startx < 78) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 21, 24, 24);
                c.stroke();
            } else {
                m6 = false;
                c.clearRect(54, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 47, 24, 24);
                c.stroke();
            } else {
                tu6 = false;
                c.clearRect(54, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 73, 24, 24);
                c.stroke();
            } else {
                w6 = false;
                c.clearRect(54, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 99, 24, 24);
                c.stroke();
            } else {
                th6 = false;
                c.clearRect(54, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 125, 24, 24);
                c.stroke();
            } else {
                f6 = false;
                c.clearRect(54, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 151, 24, 24);
                c.stroke();
            } else {
                sa6 = false;
                c.clearRect(54, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su6 = true;
                c.fillStyle = "red";
                c.fillRect(54, 177, 24, 24);
                c.stroke();
            } else {
                su6 = false;
                c.clearRect(54, 177, 24, 24);
            }
        }
    } else if (startx <= 80 && startx < 104) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 21, 24, 24);
                c.stroke();
            } else {
                m7 = false;
                c.clearRect(80, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 47, 24, 24);
                c.stroke();
            } else {
                tu7 = false;
                c.clearRect(80, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 73, 24, 24);
                c.stroke();
            } else {
                w7 = false;
                c.clearRect(80, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 99, 24, 24);
                c.stroke();
            } else {
                th7 = false;
                c.clearRect(80, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 125, 24, 24);
                c.stroke();
            } else {
                f7 = false;
                c.clearRect(80, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 151, 24, 24);
                c.stroke();
            } else {
                sa7 = false;
                c.clearRect(80, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su7 = true;
                c.fillStyle = "red";
                c.fillRect(80, 177, 24, 24);
                c.stroke();
            } else {
                su7 = false;
                c.clearRect(80, 177, 24, 24);
            }
        }
    } else if (startx <= 106 && startx < 130) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 21, 24, 24);
                c.stroke();
            } else {
                m8 = false;
                c.clearRect(106, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 47, 24, 24);
                c.stroke();
            } else {
                tu8 = false;
                c.clearRect(106, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 73, 24, 24);
                c.stroke();
            } else {
                w8 = false;
                c.clearRect(106, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 99, 24, 24);
                c.stroke();
            } else {
                th8 = false;
                c.clearRect(106, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 125, 24, 24);
                c.stroke();
            } else {
                f8 = false;
                c.clearRect(106, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 151, 24, 24);
                c.stroke();
            } else {
                sa8 = false;
                c.clearRect(106, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su8 = true;
                c.fillStyle = "red";
                c.fillRect(106, 177, 24, 24);
                c.stroke();
            } else {
                su8 = false;
                c.clearRect(106, 177, 24, 24);
            }
        }
    } else if (startx <= 132 && startx < 156) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 21, 24, 24);
                c.stroke();
            } else {
                m9 = false;
                c.clearRect(132, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 47, 24, 24);
                c.stroke();
            } else {
                tu9 = false;
                c.clearRect(132, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 73, 24, 24);
                c.stroke();
            } else {
                w9 = false;
                c.clearRect(132, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 99, 24, 24);
                c.stroke();
            } else {
                th9 = false;
                c.clearRect(132, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 125, 24, 24);
                c.stroke();
            } else {
                f9 = false;
                c.clearRect(132, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 151, 24, 24);
                c.stroke();
            } else {
                sa9 = false;
                c.clearRect(132, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su9 = true;
                c.fillStyle = "red";
                c.fillRect(132, 177, 24, 24);
                c.stroke();
            } else {
                su9 = false;
                c.clearRect(132, 177, 24, 24);
            }
        }
    } else if (startx <= 158 && startx < 182) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 21, 24, 24);
            } else {
                m10 = false;
                c.clearRect(158, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 47, 24, 24);
            } else {
                tu10 = false;
                c.clearRect(158, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 73, 24, 24);
            } else {
                w10 = false;
                c.clearRect(158, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 99, 24, 24);
            } else {
                th10 = false;
                c.clearRect(158, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 125, 24, 24);
            } else {
                f10 = false;
                c.clearRect(158, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 151, 24, 24);
            } else {
                sa10 = false;
                c.clearRect(158, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su10 = true;
                c.fillStyle = "red";
                c.fillRect(158, 177, 24, 24);
            } else {
                su10 = false;
                c.clearRect(158, 177, 24, 24);
            }
        }
    } else if (startx <= 184 && startx < 208) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 21, 24, 24);
                c.stroke();
            } else {
                m11 = false;
                c.clearRect(184, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 47, 24, 24);
                c.stroke();
            } else {
                tu11 = false;
                c.clearRect(184, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 73, 24, 24);
                c.stroke();
            } else {
                w11 = false;
                c.clearRect(184, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 99, 24, 24);
                c.stroke();
            } else {
                th11 = false;
                c.clearRect(184, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 125, 24, 24);
            } else {
                f11 = false;
                c.clearRect(184, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 151, 24, 24);
                c.stroke();
            } else {
                sa11 = false;
                c.clearRect(184, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su11 = true;
                c.fillStyle = "red";
                c.fillRect(184, 177, 24, 24);
                c.stroke();
            } else {
                su11 = false;
                c.clearRect(184, 177, 24, 24);
            }
        }
    } else if (startx <= 210 && startx < 234) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 21, 24, 24);
                c.stroke();
            } else {
                m12 = false;
                c.clearRect(210, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 47, 24, 24);
                c.stroke();
            } else {
                tu12 = false;
                c.clearRect(210, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 73, 24, 24);
                c.stroke();
            } else {
                w12 = false;
                c.clearRect(210, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 99, 24, 24);
                c.stroke();
            } else {
                th12 = false;
                c.clearRect(210, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 125, 24, 24);
                c.stroke();
            } else {
                f12 = false;
                c.clearRect(210, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 151, 24, 24);
                c.stroke();
            } else {
                sa12 = false;
                c.clearRect(210, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su12 = true;
                c.fillStyle = "red";
                c.fillRect(210, 177, 24, 24);
                c.stroke();
            } else {
                su12 = false;
                c.clearRect(210, 177, 24, 24);
            }
        }
    } else if (startx <= 236 && startx < 260) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 21, 24, 24);
                c.stroke();
            } else {
                m13 = false;
                c.clearRect(236, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 47, 24, 24);
                c.stroke();
            } else {
                tu13 = false;
                c.clearRect(236, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 73, 24, 24);
                c.stroke();
            } else {
                w13 = false;
                c.clearRect(236, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 99, 24, 24);
                c.stroke();
            } else {
                th13 = false;
                c.clearRect(236, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 125, 24, 24);
                c.stroke();
            } else {
                f13 = false;
                c.clearRect(236, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 151, 24, 24);
                c.stroke();
            } else {
                sa13 = false;
                c.clearRect(236, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su13 = true;
                c.fillStyle = "red";
                c.fillRect(236, 177, 24, 24);
                c.stroke();
            } else {
                su13 = false;
                c.clearRect(236, 177, 24, 24);
            }
        }
    } else if (startx <= 262 && startx < 286) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 21, 24, 24);
            } else {
                m14 = false;
                c.clearRect(262, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 47, 24, 24);
            } else {
                tu14 = false;
                c.clearRect(262, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 73, 24, 24);
            } else {
                w14 = false;
                c.clearRect(262, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 99, 24, 24);
            } else {
                th14 = false;
                c.clearRect(262, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 125, 24, 24);
            } else {
                f14 = false;
                c.clearRect(262, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 151, 24, 24);
            } else {
                sa14 = false;
                c.clearRect(262, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su14 = true;
                c.fillStyle = "red";
                c.fillRect(262, 177, 24, 24);
            } else {
                su14 = false;
                c.clearRect(262, 177, 24, 24);
            }
        }
    } else if (startx <= 288 && startx < 312) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 21, 24, 24);
                c.stroke();
            } else {
                m15 = false;
                c.clearRect(288, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 47, 24, 24);
                c.stroke();
            } else {
                tu15 = false;
                c.clearRect(288, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 73, 24, 24);
                c.stroke();
            } else {
                w15 = false;
                c.clearRect(288, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 99, 24, 24);
                c.stroke();
            } else {
                th15 = false;
                c.clearRect(288, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 125, 24, 24);
                c.stroke();
            } else {
                f15 = false;
                c.clearRect(288, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 151, 24, 24);
                c.stroke();
            } else {
                sa15 = false;
                c.clearRect(288, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su15 = true;
                c.fillStyle = "red";
                c.fillRect(288, 177, 24, 24);
                c.stroke();
            } else {
                su15 = false;
                c.clearRect(288, 177, 24, 24);
            }
        }
    } else if (startx <= 314 && startx < 338) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 21, 24, 24);
                c.stroke();
            } else {
                m16 = false;
                c.clearRect(314, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 47, 24, 24);
                c.stroke();
            } else {
                tu16 = false;
                c.clearRect(314, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 73, 24, 24);
                c.stroke();
            } else {
                w16 = false;
                c.clearRect(314, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 99, 24, 24);
                c.stroke();
            } else {
                th16 = false;
                c.clearRect(314, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 125, 24, 24);
                c.stroke();
            } else {
                f16 = false;
                c.clearRect(314, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 151, 24, 24);
                c.stroke();
            } else {
                sa16 = false;
                c.clearRect(314, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su16 = true;
                c.fillStyle = "red";
                c.fillRect(314, 177, 24, 24);
                c.stroke();
            } else {
                su16 = false;
                c.clearRect(314, 177, 24, 24);
            }
        }
    } else if (startx <= 340 && startx < 364) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 21, 24, 24);
                c.stroke();
            } else {
                m17 = false;
                c.clearRect(340, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 47, 24, 24);
                c.stroke();
            } else {
                tu17 = false;
                c.clearRect(340, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 73, 24, 24);
                c.stroke();
            } else {
                w17 = false;
                c.clearRect(340, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 99, 24, 24);
                c.stroke();
            } else {
                th17 = false;
                c.clearRect(340, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 125, 24, 24);
                c.stroke();
            } else {
                f17 = false;
                c.clearRect(340, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 151, 24, 24);
                c.stroke();
            } else {
                sa17 = false;
                c.clearRect(340, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su17 = true;
                c.fillStyle = "red";
                c.fillRect(340, 177, 24, 24);
                c.stroke();
            } else {
                su17 = false;
                c.clearRect(340, 177, 24, 24);
            }
        }
    } else if (startx <= 366 && startx < 390) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 21, 24, 24);
                c.stroke();
            } else {
                m18 = false;
                c.clearRect(366, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 47, 24, 24);
                c.stroke();
            } else {
                tu18 = false;
                c.clearRect(366, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 73, 24, 24);
                c.stroke();
            } else {
                w18 = false;
                c.clearRect(366, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 99, 24, 24);
                c.stroke();
            } else {
                th18 = false;
                c.clearRect(366, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 125, 24, 24);
                c.stroke();
            } else {
                f18 = false;
                c.clearRect(366, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 151, 24, 24);
                c.stroke();
            } else {
                sa18 = false;
                c.clearRect(366, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su18 = true;
                c.fillStyle = "red";
                c.fillRect(366, 177, 24, 24);
                c.stroke();
            } else {
                su18 = false;
                c.clearRect(366, 177, 24, 24);
            }
        }
    } else if (startx <= 392 && startx < 416) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 21, 24, 24);
                c.stroke();
            } else {
                m19 = false;
                c.clearRect(392, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 47, 24, 24);
                c.stroke();
            } else {
                tu19 = false;
                c.clearRect(392, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 73, 24, 24);
                c.stroke();
            } else {
                w19 = false;
                c.clearRect(392, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 99, 24, 24);
                c.stroke();
            } else {
                th19 = false;
                c.clearRect(392, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 125, 24, 24);
                c.stroke();
            } else {
                f19 = false;
                c.clearRect(392, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 151, 24, 24);
                c.stroke();
            } else {
                sa19 = false;
                c.clearRect(392, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su19 = true;
                c.fillStyle = "red";
                c.fillRect(392, 177, 24, 24);
                c.stroke();
            } else {
                su19 = false;
                c.clearRect(392, 177, 24, 24);
            }
        }
    } else if (startx <= 418 && startx < 440) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 21, 24, 24);
            } else {
                m20 = false;
                c.clearRect(418, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 47, 24, 24);
            } else {
                tu20 = false;
                c.clearRect(418, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 73, 24, 24);
            } else {
                w20 = false;
                c.clearRect(418, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 99, 24, 24);
            } else {
                th20 = false;
                c.clearRect(418, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 125, 24, 24);
            } else {
                f20 = false;
                c.clearRect(418, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 151, 24, 24);
            } else {
                sa20 = false;
                c.clearRect(418, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su20 = true;
                c.fillStyle = "red";
                c.fillRect(418, 177, 24, 24);
            } else {
                su20 = false;
                c.clearRect(418, 177, 24, 24);
            }
        }
    } else if (startx <= 444 && startx < 460) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 21, 24, 24);
                c.stroke();
            } else {
                m21 = false;
                c.clearRect(444, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 47, 24, 24);
                c.stroke();
            } else {
                tu21 = false;
                c.clearRect(444, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 73, 24, 24);
                c.stroke();
            } else {
                w21 = false;
                c.clearRect(444, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 99, 24, 24);
                c.stroke();
            } else {
                th21 = false;
                c.clearRect(444, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 125, 24, 24);
                c.stroke();
            } else {
                f21 = false;
                c.clearRect(444, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 151, 24, 24);
                c.stroke();
            } else {
                sa21 = false;
                c.clearRect(444, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su21 = true;
                c.fillStyle = "red";
                c.fillRect(444, 177, 24, 24);
                c.stroke();
            } else {
                su21 = false;
                c.clearRect(444, 177, 24, 24);
            }
        }
    } else if (startx <= 470 && startx < 486) {
        if (starty >= 21 && starty < 45) {
            if (counter % 2 !== 0) {
                m22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 21, 24, 24);
                c.stroke();
            } else {
                m22 = false;
                c.clearRect(470, 21, 24, 24);
            }
        } else if (starty >= 47 && starty < 71) {
            if (counter % 2 !== 0) {
                tu22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 47, 24, 24);
                c.stroke();
            } else {
                tu22 = false;
                c.clearRect(470, 47, 24, 24);
            }
        } else if (starty >= 73 && starty < 97) {
            if (counter % 2 !== 0) {
                w22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 73, 24, 24);
                c.stroke();
            } else {
                w22 = false;
                c.clearRect(470, 73, 24, 24);
            }
        } else if (starty >= 99 && starty < 123) {
            if (counter % 2 !== 0) {
                th22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 99, 24, 24);
                c.stroke();
            } else {
                th22 = false;
                c.clearRect(470, 99, 24, 24);
            }
        } else if (starty >= 125 && starty < 149) {
            if (counter % 2 !== 0) {
                f22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 125, 24, 24);
                c.stroke();
            } else {
                f22 = false;
                c.clearRect(470, 125, 24, 24);
            }
        } else if (starty >= 151 && starty < 175) {
            if (counter % 2 !== 0) {
                sa22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 151, 24, 24);
                c.stroke();
            } else {
                sa22 = false;
                c.clearRect(470, 151, 24, 24);
            }
        } else if (starty >= 177 && starty < 201) {
            if (counter % 2 !== 0) {
                su22 = true;
                c.fillStyle = "red";
                c.fillRect(470, 177, 24, 24);
                c.stroke();
            } else {
                su22 = false;
                c.clearRect(470, 177, 24, 24);
            }
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
    
    //window.addEventListener('load', function () {
    
    canvas.addEventListener("touchstart", function (event) {
        var touchobj = event.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
        starty = parseInt(touchobj.clientY);
        touched(event);
        event.preventDefault();
    }, false);

    canvas.addEventListener("touchend", function (event) {
        var touchobj = event.changedTouches[0]; // reference first touch point for this event
        event.preventDefault();
    }, false);

    canvas.addEventListener("mousedown", function (event) {
        //startx = event.clientX;
        //starty = event.clientY;
        touched(canvas, event);
    }, false);
    
    //}, false);
        
	drawTable();
	//setInterval(clock, 18);
}

setTimeout(begin, 100);