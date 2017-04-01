$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    $('#contact-form').addClass('nonactive');
                    $('#contact-form')[0].reset();
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    console.log(messageAlert+'-'+messageText);
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable">' + messageText + '</div>';
                    if (messageAlert && messageText) {
            
                        $('.messages').append(alertBox).toggleClass('active');
                        setTimeout(function(){ 
                            $('.messages').append(alertBox).toggleClass('active'); 
                            $('.alert').delay('8000').css('display', 'none');
                            $('#contact-form').delay('5000').removeClass('nonactive');
                            $('#contact-form')[0].reset();
                         }, 13000);
                        //$('.messages').delay( 1800 ).css('opacity', '0');
                        //$('#contact-form').delay( 1850 ).css('opacity', '1');
                        
                    }
                }
            });
            return false;
        }
    })
});