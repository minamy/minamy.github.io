	var req = new XMLHttpRequest();
	req.open('GET', 'people.php');
	req.onload = function() {
		if (req.status === 200) {
			var result = req.responseText;
			document.getElementById("numPeople").value = result.replace(/\"/g,"");
			var txtBusyness;
			if (result > 70) {
				document.getElementById("busyness").src = "Images/ExtremelyBusy.png";
				txtBusyness = "Extremely Busy";
			}
			else if (result > 50) {
				document.getElementById("busyness").src = "Images/RelativelyBusy.png";
				txtBusyness = "Relatively Busy";
			}
			else if (result > 40) {
				document.getElementById("busyness").src = "Images/Busy.png";
				txtBusyness = "Busy";
			}
			else if (result > 30) {
				document.getElementById("busyness").src = "Images/NotSoBusy.png";
				txtBusyness = "Not so busy";
			}
			else {
				document.getElementById("busyness").src = "Images/Free.png";
				txtBusyness = "Free";
			}
			document.getElementById("txtBusyness").innerHTML = txtBusyness;
		} else {
			alert('Fail: ' + req.status);
		}
	};
	req.send();