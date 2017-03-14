function refreshPage() {
  $( ":mobile-pagecontainer" ).pagecontainer("change", "#create_account",
    {
      allowSamePageTransition : true,
      transition              : 'none',
      changeHash              : false,
      reload                  : true
    }
  );
}

$(document).on('pageshow', '#create_account', function() {
    $('#frmAcc').on('submit', function(e) {
        var email = $("#accEmail").val();
        var rEmail = $("#accrEmail").val();
        var pass = $("#accPassword").val();
        var rPass = $("#accrPassword").val();
        if (email == "" || pass == "" || rEmail == "" || rPass == "") {
            $("#accEmpty").popup("open");
            e.preventDefault();
        } else {
            if ((email != rEmail) || (pass != rPass)) {
                $("#accWrong").popup("open"); 
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
                            $("#accExists").popup("open");
                        } else {
                            $("#accSuccess").popup("open");
                        }
                    }
                });
                return false;
            }
        }
    });
});