$(function() {
                $('#main_form').on('submit', function(e) {

                    var email = $("#email").val();
                    var pass = $("#password").val();
                    var $div = $("<div>", {"class": "alert", id: "div1"});
                    var $span = $("<span>");
                    if (email == "" || pass == "") {
                        $('#div1').remove();
                        $('#main_form').append(
                            $($div).append(
                                $($span).append("<strong>Error: </strong>All fields are required.")
                            )
                        );
                        e.preventDefault();
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: "account.php",
                            data:
                            {
                                email: email,
                                pass: pass
                            },
                            success: function(data) {
                                if (data.includes("success")) {
                                    swal("Success!", "You have logged in!", "success");
                                    $('#div1').remove();
                                    setTimeout(function() {
                                        window.location = 'index.php'
                                    }, 1000); // 1 sec
                                } else {
                                    $('#div1').remove();
                                    swal("Login Failed", "Email and/or password entered is invalid.", "error");
                                }
                            }
                        });
                        return false;
                    }
                });
});