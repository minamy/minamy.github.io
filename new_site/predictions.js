
var collapsed = false;
var s = {};
var p = {};
var timetable = [];
function gShould(){
    var w = ["should", "will", "ought to"];
    return w[parseInt(w.length*Math.random())];
}

function gAdvice(){
    var w = ["should", "ought to"];
    return w[parseInt(w.length*Math.random())];
}

function pAdvice(){
    var w = ["It is a good idea to go to the gym at this time", "This is a good time to go to the gym.", "It is a good idea to go to the gym at this time.", "It is advisable to choose this time to go to the gym.", "You "+gAdvice()+" go to the gym at this time."];
    return w[parseInt(w.length*Math.random())];
}

function nAdvice() {
    var w = ["It is not advisable to go to the gym at this time.", "It is not a good idea to go to the gym at this time.", "You should go to the gym another time.", "It is advisable to try a different time to go to the gym."];
    return w[parseInt(w.length*Math.random())];
}


function domloaded() {
    var f = document.getElementById("main_form");
    f.addEventListener("submit", function(e) {
        e.preventDefault();
        if (collapsed){
            var c = document.getElementById("collapse");
            document.getElementById("answer").textContent = "";
            document.getElementById("day").value = "";
            document.getElementById("hour").value = "";
            c.style.height = "auto";
            c.style.visibility = "visible";
            collapsed = !collapsed;
        } else {
            var ans = "";
            var a = document.getElementById("answer");
            var day = document.getElementById("day").value.toLowerCase();
            var hour = document.getElementById("hour").value.toLowerCase();
            var days = ["thu", "fri", "sat", "sun", "mon", "tue", "wed"];
			var d = 0;
            while (d < 7){
                if (day.search(days[d]) != -1) break;
                d++;
            }
            var hsearch =hour.match(/[0-9]+/);
            if (hsearch != null && hsearch.length > 0 && d < 7){
                var h = parseInt(hsearch[0])+(hour.search("pm")==-1?0:12);
                //var now = (new Date()*1+60000*60)/(60000*60*24);
                var now = (24849891.818439715/(60*24));
                var cd = now % 7
                if (d < cd) d += 7;
                var time = (now - cd + d + h/24.0)*24*60;
                var busy = getBusy(time);
                var free = getFree(time);
                if (free){
                    if (free[0]&&free[1]&&free[2]&&free[3]){
                        if (isBusy(busy.busy)){
                            ans = ans + "You are free at this time. Unfortunatetly, the gym "+gShould()+" be " + getText(busy.busy)+".";
                        } else {
                            ans = ans + "You are free and the gym "+gShould()+" be " + getText(busy.busy)+". "+pAdvice();
                        }
                    } else {
                        if (isBusy(busy.busy)){
                            ans = ans + "The gym "+gShould()+" be " + getText(busy.busy)+". "+"You aren't free at this time anyway so it doesn't matter.";
                        } else {
                            ans = ans + "The gym "+gShould()+" be " + getText(busy.busy)+". "+"This would be a good time to go to the gym if you were free."
                        }
                    }
                } else {
                    if (Math.abs(busy.sbusy-busy.ebusy) < 20){
                        ans = ans + "The gym "+gShould()+" be " + getText(busy.busy) + ". "+(isBusy(busy.busy)?nAdvice():pAdvice());
                    } else {
                        ans = ans + "The hour at the gym starts out "+getText(busy.sbusy)+" and ends "+getText(busy.ebusy)+". "+(isBusy(busy.busy)?nAdvice():pAdvice());
                    }
                }
                a.textContent = ans;
                var c = document.getElementById("collapse");
                c.style.height = "0px";
                c.style.visibility = "collapse";
                collapsed = !collapsed;
            }
        }
    });
    getHistory();
    getTimetable();
}

function isBusy(busy){
    return busy > 40;
}

function getText(busy){
    if (busy > 80){
        return "extremely busy";
    } else if (busy > 60){
        return "very busy"
    } else if (busy > 40){
        return "busy";
    } else if (busy > 20){
        return "not so busy";
    } else {
        return "free";
    }
}

function getBusy(time){
    var j = 0;
	while (j+1 < p.length && p.time[j+1] < time-60) j++;
    var pre = 0;
    var prec = 0;
	while (j+1 < p.length && p.time[j+1] < time){
        prec++;
        pre += p.data[j];
        j++;
    }
    var sbusy = 0;
    var sbusyc = 0;
	while (j+1 < p.length && p.time[j+1] < time+30){
        sbusyc++;
        sbusy += p.data[j];
        j++;
    }
    var ebusy = 0;
    var ebusyc = 0;
	while (j+1 < p.length && p.time[j+1] < time+60){
        ebusyc++;
        ebusy += p.data[j];
        j++;
    }
    var post = 0;
    var postc = 0;
	while (j+1 < p.length && p.time[j+1] < time+120){
        postc++;
        post += p.data[j];
        j++;
    }
    pre /= prec;
    pre = prec==0?0:pre;
    sbusy /= sbusyc;
    sbusy = sbusyc==0?0:sbusy;
    ebusy /= ebusyc;
    ebusy = ebusyc==0?0:ebusy;
    post /= postc;
    post = postc==0?0:post;
    var busy = (sbusy + ebusy) / 2;
    return {pre: pre, sbusy: sbusy, busy: busy, ebusy: ebusy, post: post};
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
                setPrediction();
			}
		} else {
            console.log("error");
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
			}
		} else {
			// We reached our target server, but it returned an error
			s = generateSeries(1000);
		}
	};
	request.send(data);
	//NO JQUERY
}

function getFree(time){
    time = parseInt((time-24802560) / 15) % 672;
    if (timetable.length > 0){
        var t = [];
        t[0] = timetable[time+0];
        t[1] = timetable[time+1];
        t[2] = timetable[time+2];
        t[3] = timetable[time+3];
        return t;
    } else {
        return false;
    }
}

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

document.addEventListener('DOMContentLoaded',domloaded,false);