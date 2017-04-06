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
                                name: email,
                                pass: pass
                            },
                            success: function(data) {
                                if (data.includes("success")) {
                                    $('#div1').remove();
                                    console.log("woo");
                                    setTimeout(function() {
                                        window.location = 'index.php'
                                    }, 1000); // 1 sec
                                } else {
                                    $('#div1').remove();
                                }
                            }
                        });
                        return false;
                    }
                });
});