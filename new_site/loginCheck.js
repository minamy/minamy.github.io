$(function() {
                $('#main_form').on('submit', function(e) {

                    var email = $("#email").val();
                    var pass = $("#password").val();
                    var $div = $("<div>", {"class": "alert", id: "div1"});   // error message
                    var $div2 = $("<div>"); // success message
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
                                name: email,
                                pass: pass
                            },
                            success: function(data) {
                                if (data.includes("success")) {
                                    $('#div1').remove();
                                    $('#main_form').append(
                                        $($div2).append(
                                            $($span).append("<strong>Login Successful! </strong>")
                                        )
                                    );
                                    setTimeout(function() {
                                        window.location = 'index.php'
                                    }, 1000); // 1 sec
                                } else {
                                    $('#div1').remove();
                                    $('#main_form').append(
                                        $($div).append(
                                            $($span).append("<strong>Error: </strong>Email and/or password entered is invalid.")
                                        )
                                    );
                                    e.preventDefault();
                                }
                            }
                        });
                        return false;
                    }
                });
});