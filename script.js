$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var email_error=true;
    var password_error=true;
    var confirm_password_error=true;

    /* for username */
    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length<3 || username_val.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('invalid user name');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    /* for email */
    $('#emailid').keyup(function(){
        email_validation();
    });
    function email_validation(){
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        var email_val=$('#emailid').val();
        if(emailregex.test(email_val)){
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email is invalid');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
    }
    /* for password */
    $('#password').keyup(function(){
        password_validation();
    });
    function password_validation(){
        /*var strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");*/
        var strongRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        var password_val=$('#password').val();
        if(strongRegex.test(password_val)){
            $('#passwordvalidation').hide();
        }
        else{
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('password Cannot be empty');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
    }   
    /* for confirm password */ 
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val.length!=confirm_password_val.length){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('password does not match');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        } 
    }
    $('#submitvalidation').click(function(){
        username_validation();
        email_validation();
        password_validation();
        confirm_password();
        if(Error==true && password_error==true && confirm_password_error==true && email_error==true){
            return true;
          }
        else{
            return false;
        }
    });  
      
});