$(function() {
    $('#frmAcc').on('submit', function(e) {
        var email = $("#accEmail").val();
        var rEmail = $("#accrEmail").val();
        var pass = $("#accPassword").val();
        var rPass = $("#accrPassword").val();
        var $div = $("<div>", {"class": "alert", id: "div1"});
        var $span = $("<span>");
        if (email == "" || pass == "" || rEmail == "" || rPass == "") {
            $('#div1').remove();
            $('#frmAcc').append(
                $($div).append(
                    $($span).append("<strong>Error: </strong>All fields are required.")
                )
            );
            e.preventDefault();
        } else {
            if ((email != rEmail) || (pass != rPass)) {
                $('#div1').remove();
                $('#frmAcc').append(
                    $($div).append(
                        $($span).append("<strong>Error: </strong>Emails and/or passwords do not match.")
                    )
                );
                e.preventDefault();
            } else {
                $.ajax({
                    type: 'POST',
                    url: "saveUserAccount.php",
                    data:
                    {
                        email: email,
                        pass: pass
                    },
                    success: function(data) {
                        if (data.includes("success")) {
                            $('#div1').remove();
                            swal("Oops...", "The email address is already taken!", "error");
                            e.preventDefault();
                        } else {
                            swal("Success!", "Your account has been created!", "success");
                            $('#div1').remove();
                            setTimeout(function() {
                                window.location = 'index.html'
                            }, 1000); // 1 sec
                        }
                    }
                });
                return false;
            }
        }
    });
});