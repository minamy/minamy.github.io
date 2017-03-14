function refreshPage() {
  $( ":mobile-pagecontainer" ).pagecontainer("change", "#login",
    {
      allowSamePageTransition : true,
      transition              : 'none',
      changeHash              : false,
      reload                  : true
    }
  );
}

$(document).on('pageshow','#login', function() {
                    $('#main_form').on('submit', function(e) {

                    var email = $("#email").val();
                    var pass = $("#password").val();
                    if (email == "" || pass == "") {
                        $("#loginEmpty").popup("open");
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
                                    alert("Login successful");
                                } else {
                                    $("#loginInvalid").popup("open");
                                }
                            }
                        });
                        return false;
                    }
                    });
});