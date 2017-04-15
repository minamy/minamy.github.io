var c;
var canvas;
var img;
var cs;

var left = new Image();
var zout = new Image();
var adv = new Image();
var zin = new Image();
var right = new Image();
left.src = "Images/left.png";
zout.src = "Images/out.png";
adv.src = "Images/advice.png";
zin.src = "Images/in.png";
right.src = "Images/right.png";

var bounds = {};
bounds.x = 100;
bounds.y = 100;
bounds.w = 500;
bounds.h = 500;
var buttonWidth = 100;
var res = 100;

var mx = -1;
var my = -1;
var dx = 0;
var dy = 0;
var maxmag = 1;
var drag = false;
var zdist = -1;
var touches = 0;
var tdist = -1
var max = 80;

var busy = 40
var start = 0;
var width = 200;
var s = generateSeries(20);
var p = null;
var but = -1;
var advice = "true"==(document.URL.match(/advice=([a-z]+)/)[1])
var timetable = [];

function getTimetable(){
	//DO POST
	var data = JSON.stringify({ value: "gettimetable", name: name });
	var request = new XMLHttpRequest();
	request.open('POST', 'db_interface.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = JSON.parse(request.response);
				if (resp == "Failure"){
					timetable = []
				} else {
					timetable = resp;
					for (var i = 0; i < timetable.length; i++){
						timetable[i] = !timetable[i];
					}
				}
			}
		}
	};
	request.send(data);
}

function updateHistory(){
	//DO POST
	var data = JSON.stringify({ value: "gethistory" });
	var request = new XMLHttpRequest();
	request.open('POST', 'db_interface.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = JSON.parse(request.response);
				st = [];
				sd = [];
				for (var i = 0; i < resp.length; i++){
					st[i] = (new Date(resp[i][0]))/60000;
					sd[i] = parseInt(resp[i][1]);
				}
				s.time = st;
				s.data = sd;
				s.length = resp.length;
				draw();
			}
		} else {
			// We reached our target server, but it returned an error
			s = generateSeries(1000);
		}
	};
	request.send(data);
	//NO JQUERY
}

function setPrediction(){
	//DO POST
	var t = [];
	var d = [];
	for (var i = 0; i < s.length && i < s.length; i++){
		t[i] = s.time[i];
		d[i] = s.data[i];
	}
	var data = JSON.stringify({ value: "predict", time: t, people: d });
	var request = new XMLHttpRequest();
	request.open('POST', 'prediction_system.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = JSON.parse(request.response);
				st = [];
				sd = [];
				for (var i = 0; i < resp[0].length; i++){
					st[i] = resp[0][i];
					sd[i] = parseInt(resp[1][i]);
				}
				p = {};
				p.time = st;
				p.data = sd;
				p.length = resp[0].length;
				p.width = 200;
				draw();
			}
		} else {
			// We reached our target server, but it returned an error
			s = generateSeries(1000);
		}
	};
	request.send(data);
	//NO JQUERY
}

function getHistory(){
	//DO POST
	var data = JSON.stringify({ value: "gethistory" });
	var request = new XMLHttpRequest();
	request.open('POST', 'db_interface.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = JSON.parse(request.response);
				st = [];
				sd = [];
				for (var i = 0; i < resp.length; i++){
					st[i] = (new Date(resp[i][0]))/60000;
					sd[i] = parseInt(resp[i][1]);
				}
				s.time = st;
				s.data = sd;
				s.length = resp.length;
				s.width = 200;
				start = s.time[s.length - 1] - 110;
				setPrediction();
				draw();
			}
		} else {
			// We reached our target server, but it returned an error
			s = generateSeries(1000);
		}
	};
	request.send(data);
	//NO JQUERY
}
function setHistory(s){
	//DO POST
	var t = [];
	var p = [];
	for (var i = 0; i < s.length && i < 100; i++){
		var d = new Date(1488153600000+(parseInt(s.time[i]*60000)));
		var mo = d.getMonth() + 1;
		mo=mo>9?mo:"0"+mo;
		var da = d.getDate();
		da=da>9?da:"0"+da;
		var ho = d.getHours();
		ho=ho>9?ho:"0"+ho;
		var mi = d.getMinutes();
		mi=mi>9?mi:"0"+mi;
		var se = d.getSeconds();
		se=se>9?se:"0"+se;
		
		t[i] = d.getFullYear()+"-"+mo+"-"+da+" "+ho+":"+mi+":"+se;
		p[i] = s.data[i];
	}
	var data = JSON.stringify({ value: "sethistory", time: t, people: p });
	var request = new XMLHttpRequest();
	request.open('POST', 'db_interface.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = request.response;
				console.log(resp);
				if (resp.substr(0, 7) == "Success" && s.length >= 100){
					addHistory(s, 100);
				}
			}
		} else {
			// We reached our target server, but it returned an error
			console.log("FUCK");
		}
	};
	request.send(data);
	//NO JQUERY
}

function addHistory(s, n){
	//DO POST
	var t = [];
	var p = [];
	var j = 0;
	for (var i = n; i < s.length && i < n + 100; i++){
		var d = new Date(1488153600000+(parseInt(s.time[i]*60000)));
		var mo = d.getMonth() + 1;
		mo=mo>9?mo:"0"+mo;
		var da = d.getDate();
		da=da>9?da:"0"+da;
		var ho = d.getHours();
		ho=ho>9?ho:"0"+ho;
		var mi = d.getMinutes();
		mi=mi>9?mi:"0"+mi;
		var se = d.getSeconds();
		se=se>9?se:"0"+se;
		
		t[j] = d.getFullYear()+"-"+mo+"-"+da+" "+ho+":"+mi+":"+se;
		p[j] = s.data[i];
		j++;
	}
	var data = JSON.stringify({ value: "addhistory", time: t, people: p });
	var request = new XMLHttpRequest();
	request.open('POST', 'db_interface.php');
	//request.responseType = "json";
	request.setRequestHeader('Content-Type', 'application/json');
	request.onreadystatechange = function() {
		if (request.status >= 200 && request.status < 400) {
			// Success!
			if (request.readyState == 4) {
				var resp = request.response;
				console.log(resp);
				if (resp.substr(0, 7) == "Success" && s.length >= n + 100){
					addHistory(s, n + 100);
				}
			}
		} else {
			// We reached our target server, but it returned an error
			console.log("FUCK");
		}
	};
	request.send(data);
	//NO JQUERY
}





function generateSeries(length = 1000) {
	var s = {};
	var pt = 0;
	var pd = 0;
	var st = [];
	var sd = [];
	for (var i = 0; i < length; i++){
		var t = pt + 5*(Math.random() + Math.random());
		var d = pd
		var a = 0;
		if (t % 1440 < 7*60) a = 0;
		else if (t % 1440 < 9*60) a = 20;
		else if (t % 1440 < 12*60) a = 30;
		else if (t % 1440 < 14.5*60) a = 100;
		else if (t % 1440 < 19*60) a = 60;
		else if (t % 1440 < 21*60) a = 30;
		else if (t % 1440 < 22*60) a = 1;
		else a = 0;
		if ((t % (1440 * 7)) / 1440 > 5) a /= 3;
		if (d > a) d += parseInt(10*(Math.random() - Math.random() - Math.random()));
		else d += parseInt(10*(Math.random() + Math.random() - Math.random()));
		d=d<0?0:d;
		d=a==0?0:d;
		st[i] = t;
		sd[i] = d;
		pt = t;
		pd = d;
	}
	
	s.length = length;
	s.time = st
	s.data = sd;
	return s;
}

function ttIndex(i){
	return parseInt((start+(i*width)/res-24802560)/15)%672;
}

function getX(y){
	return bounds.y + y/max*0.8*(bounds.h);
	//p.y = parseInt((s.time[i]-start)*bounds.h/(width - 1));
}

function mmove(x, y){
	mx = x - canvas.getBoundingClientRect().left;
	my = y - canvas.getBoundingClientRect().top;
	if (drag) {
		if (but == -1) {
			start = start - (mx-dx)*(width - 1)/canvas.width;
			dx = mx;
			dy = my;
		} else {
			var newbut;
			if (my <= buttonWidth){
				newbut = parseInt(5 * mx / canvas.width);
			} else {
				newbut = -1;
			}
			if (newbut != but){
				but = -1;
				drag = false
			}
		}
	}
	draw();
}

function mdown(x, y){
	drag = true;
    
	dx = x - canvas.getBoundingClientRect().left;
	dy = y - canvas.getBoundingClientRect().top;
	
	if (my <= buttonWidth){
		but = parseInt(5 * dx / canvas.width);
		if (but == 2) advice = !advice;
	} else {
		but = -1;
	}
	
	draw();
}

function mup(){
	drag = false;
	but = -1;
}

function mout(x, y){
	mx = -1;
	my = -1;
	drag = false;
	but = -1;
}

function mwheel(d){
	var delta = width * (d * (-0.0002));
	start = start - delta;
	width = width + 2 * delta;
	draw();
}

window.onresize = function(e){
	
};

function draw(){
	bounds.x = 0;
	bounds.h = canvas.height - bounds.y - buttonWidth;
	bounds.w = canvas.width;
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.fillStyle = "#fff";
	c.fillRect(0, 0, canvas.width, canvas.height);
	
	c.lineWidth = 3;
	c.strokeStyle = "#f00";
	c.fillStyle = "rgba(0, 255, 0, 0.3)"
	c.beginPath();
	var j = 0;
	var lastX = -1;
	if (p != null){
		while (j+1 < p.length && p.time[j+1] < start) j++;
		for (var i = 0; i <= res; i++) {
			var x = 0;
			var count = 0;
			while (j+1 < p.length && p.time[j] < start + (width * i) / res){
				x += p.data[j];
				count++;
				j++;
			}
			if (j + 1 < p.length){
				if ( count == 0){
					if (lastX >= 0){
						if (advice && lastX < getX(busy) && timetable[ttIndex(i-1)] && timetable[ttIndex(i)]){
							c.fillRect((i - 1) * canvas.width / res, buttonWidth, canvas.width / res, bounds.h);
						}
						c.moveTo((i - 1) * canvas.width / res, canvas.height - lastX);
						c.lineTo(i * canvas.width / res, canvas.height - lastX);
					}
				} else {
					x = getX(x / count);
					if (lastX >= 0){
						if (advice && (lastX+x)/2.0 < getX(busy) && timetable[ttIndex(i-1)] && timetable[ttIndex(i)]){
							c.fillRect((i - 1) * canvas.width / res, buttonWidth, canvas.width / res, bounds.h);
						}
						c.moveTo((i - 1) * canvas.width / res, canvas.height - lastX);
						c.lineTo(i * canvas.width / res, canvas.height - x);
					}
					lastX = x;
				}
			}
		}
	}
	
	c.stroke();

	
	c.lineWidth = 3;
	c.strokeStyle = "#000";
	c.beginPath();
	j = 0;
	lastX = -1;
	if (s != null){
		while (j+1 < s.length && s.time[j+1] < start) j++;
		for (var i = 0; i <= res; i++) {
			var x = 0;
			var count = 0;
			while (j+1 < s.length && s.time[j] < start + (width * i) / res){
				x += s.data[j];
				count++;
				j++;
			}
			if (j + 1 < s.length){
				if ( count == 0){
					if (lastX >= 0){
						c.moveTo((i - 1) * canvas.width / res, canvas.height - lastX);
						c.lineTo(i * canvas.width / res, canvas.height - lastX);
					}
				} else {
					x = getX(x / count);
					if (lastX >= 0){
						c.moveTo((i - 1) * canvas.width / res, canvas.height - lastX);
						c.lineTo(i * canvas.width / res, canvas.height - x);
					}
					lastX = x;
				}
			}
		}
	}
	
	c.stroke();
	
	c.drawImage(left, 0 * canvas.width / 5, 0, canvas.width / 5,  buttonWidth);
	c.drawImage(zout, 1 * canvas.width / 5, 0, canvas.width / 5,  buttonWidth);
	c.drawImage(adv, 2 * canvas.width / 5, 0, canvas.width / 5,  buttonWidth);
	c.drawImage(zin, 3 * canvas.width / 5, 0, canvas.width / 5,  buttonWidth);
	c.drawImage(right, 4 * canvas.width / 5, 0, canvas.width / 5,  buttonWidth);
	
	c.beginPath();
	c.moveTo(0, buttonWidth);
	c.lineTo(canvas.width, buttonWidth);
	for (var i = 1; i < 5; i++){
		c.moveTo(i * canvas.width / 5, 0);
		c.lineTo(i * canvas.width / 5, buttonWidth);
	}
	c.stroke();
	
	c.beginPath();
	
	c.moveTo(0, canvas.height-(bounds.y));
	c.lineTo(canvas.width, canvas.height-(bounds.y));
	
	c.stroke();
	var fsize = parseInt(bounds.y/4);
	c.font = fsize+"px Tahoma";
	if (width < 60*6){
		//hourly
		for (var i = start - width / 4 - ((start - width / 4) % (60)); i < start + width * 5 / 4; i+= 60){
			var x = ((i - start) * canvas.width) / width;
			c.lineWidth = 2;
			c.strokeStyle = "#000";
			c.setLineDash([5, 3]);
			c.beginPath();
			c.moveTo(bounds.x + x, buttonWidth);
			c.lineTo(bounds.x + x, buttonWidth + bounds.h)
			c.stroke();
			c.setLineDash([]);
			c.fillStyle = "#000";
			var days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
			var time = ["Midnight", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "Noon", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"]
			c.fillText(days[parseInt(i/(60*24))%7], bounds.x + x + 10, buttonWidth + fsize + 4);
			c.fillText(time[parseInt(i/(60))%24], bounds.x + x + 10, buttonWidth + 2.2 * fsize + 4);
		}
	} else if (width < 60*18){
		for (var i = start - width / 4 - ((start - width / 4) % (60*3)); i < start + width * 5 / 4; i+= 60*3){
			var x = ((i - start) * canvas.width) / width;
			c.lineWidth = 2;
			c.strokeStyle = "#000";
			c.setLineDash([5, 3]);
			c.beginPath();
			c.moveTo(bounds.x + x, buttonWidth);
			c.lineTo(bounds.x + x, buttonWidth + bounds.h)
			c.stroke();
			c.setLineDash([]);
			c.fillStyle = "#000";
			var days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
			var time = ["Midnight", "Night", "Dawn", "Morning", "Noon", "Afternoon", "Evening", "Dusk"]
			c.fillText(days[parseInt(i/(60*24))%7], bounds.x + x + 10, buttonWidth + fsize + 4);
			c.fillText(time[parseInt(i/(60*3))%8], bounds.x + x + 10, buttonWidth + 2.2 * fsize + 4);
		}
	} else if (width < 60*60){
		// 12 hourly
		for (var i = start - width / 4 - ((start - width / 4) % (60*12)); i < start + width * 5 / 4; i+= 60*12){
			var x = ((i - start) * canvas.width) / width;
			c.lineWidth = 2;
			c.strokeStyle = "#000";
			c.setLineDash([5, 3]);
			c.beginPath();
			c.moveTo(bounds.x + x, buttonWidth);
			c.lineTo(bounds.x + x, buttonWidth + bounds.h)
			c.stroke();
			c.setLineDash([]);
			c.fillStyle = "#000";
			var days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
			var time = ["Midnight", "Noon"]
			c.fillText(days[parseInt(i/(60*24))%7], bounds.x + x + 10, buttonWidth + fsize + 4);
			c.fillText(time[parseInt(i/(60*12))%2], bounds.x + x + 10, buttonWidth + 2.2 * fsize + 4);
		}
	} else if ((60*24 * canvas.width) / width > c.measureText("Wednesday").width){
		// daily
		for (var i = start - width / 4 - ((start - width / 4) % (60*24)); i < start + width * 5 / 4; i+= 60*24){
			var x = ((i - start) * canvas.width) / width;
			c.lineWidth = 2;
			c.strokeStyle = "#000";
			c.setLineDash([5, 3]);
			c.beginPath();
			c.moveTo(bounds.x + x, buttonWidth);
			c.lineTo(bounds.x + x, buttonWidth + bounds.h)
			c.stroke();
			c.setLineDash([]);
			c.fillStyle = "#000";
			var days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
			c.fillText(days[parseInt(i/(60*24))%7], bounds.x + x + 10, buttonWidth + fsize + 4);
		}
	}
	
	c.fillStyle = "#000";
	var fsize = parseInt(bounds.y/4);
	c.font = fsize+"px Tahoma";
	var date = (new Date((start+24*60)*60000)).toDateString().substr(4, 100);
	var time = (new Date((start+24*60)*60000)).toTimeString().substr(0, 5);
	//c.save();
	//c.translate(bounds.x - fsize + 2, 0);
	//c.rotate(Math.PI / 2);
	c.fillText(date, 10, canvas.height - (bounds.y - fsize + 2 - 10));
	c.fillText(time, (c.measureText(date).width - c.measureText(time).width)/2 + 10, canvas.height - (bounds.y - fsize + 2 - fsize - 20));
	c.restore();
	date = (new Date((start+width)*60000)).toDateString().substr(4, 100);
	time = (new Date((start+width)*60000)).toTimeString().substr(0, 5);
	//c.save();
	//c.translate(bounds.x - fsize + 2, canvas.height - c.measureText(date).width);
	//c.rotate(Math.PI / 2);
	c.fillText(date, canvas.width - c.measureText(date).width - 10, canvas.height - (bounds.y - fsize + 2 - 10));
	c.fillText(time, canvas.width - c.measureText(date).width + (c.measureText(date).width - c.measureText(time).width)/2 - 10, canvas.height - (bounds.y - fsize + 2 - fsize - 20));
	//c.restore();
	fsize = parseInt(bounds.y/2);
 	c.font = fsize+"px Tahoma";
 	var text = "Empty";
 	//c.save();
 	//c.translate(bounds.x + 20, 10);
 	//c.rotate(Math.PI / 2);
 	c.fillText(text, 10, canvas.height - (bounds.y + 20));
 	//c.restore();
 	text = "Full";
	//c.save();
 	//c.translate(bounds.x + bounds.w - fsize, 10);
 	//c.rotate(Math.PI / 2);
 	c.fillText(text, 10, canvas.height - (bounds.y + bounds.h - fsize));
	//c.restore();
}

function clock(){
	var delta = width * 0.01;
	if (but != -1){
		if (but == 0){
			start -= width * 0.01;
		} else if (but == 1){
			start = start - delta;
			width = width + 2 * delta;
		} else if (but == 2){
			
		} else if (but == 3){
			start = start + delta;
			width = width - 2 * delta;
		} else {
			start += width * 0.01;
		}
		draw();
	}
}

window.onresize = function(e){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 100;
};

function begin(){
	canvas = document.getElementById("timeline");
	c = canvas.getContext("2d");
	c.lineWidth = 1.5;
	
	canvas.addEventListener('mousewheel',function(event){
		mwheel(event.wheelDelta);
		event.returnValue = false;
		return false; 
	}, false);
	
	canvas.addEventListener('mousemove',function(event){
		mmove(event.x, event.y);
		return false; 
	}, false);
	
	canvas.addEventListener('mouseup',function(event){
		mup(event.x, event.y);
		return false; 
	}, false);
	
	canvas.addEventListener('mousedown',function(event){
		event.preventDefault();
		mdown(event.x, event.y);
		return false; 
	}, false);
	
	canvas.addEventListener('touchmove',function(event){
		event.preventDefault();
		if (touches < 2){
			for (var i = 0; i < event.touches.length; i++){
				mmove(event.touches[i].pageX, event.touches[i].pageY);
			}
		} else if (event.touches.length == 2) {
			ndist = Math.sqrt((event.touches[0].pageX - event.touches[1].pageX) * (event.touches[0].pageX - event.touches[1].pageX)+ (event.touches[0].pageY - event.touches[1].pageY) * (event.touches[0].pageY - event.touches[1].pageY))
			if (tdist != -1){
				mwheel(5*(ndist-tdist));
			}
			tdist = ndist;
		}
		return false; 
	}, false);
	
	canvas.addEventListener('touchend',function(event){
		event.preventDefault();
		tdist = -1;
		touches = 0;
		mup();
		return false; 
	}, false);
	
	canvas.addEventListener('touchstart',function(event){
		for (var i = 0; i < event.touches.length; i++){
			touches++;
			mdown(event.touches[i].pageX, event.touches[i].pageY);
		}
		return false; 
	}, false);
	
	canvas.addEventListener('mouseout',function(event){
		mout(event.x, event.y);
		return false; 
	}, false);
	
	window.onresize({});
	draw();
	setInterval(clock, 18);
	setInterval(updateHistory, 60000);
	getTimetable();
}

getHistory();
setTimeout(begin, 100);