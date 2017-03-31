$(function() {
			$('#frmEditAcc').on('submit', function(e) {
				var pass = $("#accPass").val();
				var newPass = $("#accNewPass").val();
				var confNewPass = $("#accConfNewPass").val();
				var $div = $("<div>", {"class": "alert", id: "div1"});
				var $span = $("<span>");
				if (pass == "" || newPass == "" || confNewPass == "") {
					$('#div1').remove();
					$('#frmEditAcc').append(
						$($div).append(
							$($span).append("<strong>Error: </strong>All fields are required.")
						)
					);
					e.preventDefault();
				} else {
                    if (newPass != confNewPass) {
                        $('#div1').remove();
                        $('#frmEditAcc').append(
                        $($div).append(
                                $($span).append("<strong>Error: </strong>Passwords do not match.")
                            )
                        );
                        e.preventDefault();
                    } else {
                        $.ajax({
						type: 'POST',
						url: "editAccount.php",
						data: {
                            pass: pass,
                            newPass: newPass
                        },
						success: function(data) {
							if (data.includes("success")) {
                                $('#div1').remove();
                                setTimeout(function() {
                                window.location = 'index.php'
                                }, 2000); // 2 sec
							} else {
								$('#div1').remove();
                                    $('#frmEditAcc').append(
                                        $($div).append(
                                            $($span).append("<strong>Error: </strong>Current password is incorrect.")
                                        )
                                    );
                                e.preventDefault();
							}
						}
                	});
                    }
                    return false;	
				}
			});
});