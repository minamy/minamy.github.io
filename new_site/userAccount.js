$(function() {
    $('#frmAcc').on('submit', function(e) {
        var email = $("#accEmail").val();
        var name = $("#accName").val();
        var pass = $("#accPassword").val();
        var rPass = $("#accrPassword").val();
        var $div = $("<div>", {"class": "alert", id: "div1"});
        var $span = $("<span>");
        if (email == "" || pass == "" || name == "" || rPass == "") {
            $('#div1').remove();
            $('#frmAcc').append(
                $($div).append(
                    $($span).append("<strong>Error: </strong>All fields are required.")
                )
            );
            e.preventDefault();
        } else {
            if (pass != rPass) {
                $('#div1').remove();
                $('#frmAcc').append(
                    $($div).append(
                        $($span).append("<strong>Error: </strong>Passwords do not match.")
                    )
                );
                e.preventDefault();
            } else {
                $.ajax({
                    type: 'POST',
                    url: "saveUserAccount.php",
                    data:
                    {
                        name: name,
                        email: email,
                        pass: pass
                    },
                    success: function(data) {
                        if (data.includes("success")) {
                            $('#div1').remove();
                            e.preventDefault();
                        } else {
                            $('#div1').remove();
                            setTimeout(function() {
                                window.location = 'index.php'
                            }, 1000); // 1 sec
                        }
                    }
                });
                return false;
            }
        }
    });
});