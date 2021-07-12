//Validate data from user login and register
function removeLogin(){
    var loginContainer=document.getElementById("login-container");
    var registerContainer=document.getElementById("register-container");
    if(loginContainer.style.display==="block"){
        loginContainer.style.display="none";
        registerContainer.style.display="block";
    }
    else{
        loginContainer.style.display="block";
        registerContainer.style.display="none";
    }
};
function showPassword(){
    var showPass=document.getElementById("passwordLogin");
    if(showPass.type==="password"){
    showPass.type="text";}
    else{
        showPass.type="password";
    }
};
function passCheck(){
    var pass = document.getElementById("newPassword").value;
    var passCheck = document.getElementById("newPasswordConfirm").value;
    if (pass === passCheck) {
        let confPass=document.getElementById("confirmpass");
        confPass.classList.remove("fa-close");
        confPass.classList.add("fa-check");
    }
    else{
        let confPass=document.getElementById("confirmpass");
        confPass.classList.remove("fa-check");
        confPass.classList.add("fa-close");
    }
    };

   //registro en base usuarios
    $(document).ready(function(){
        $("#registerForm").submit(function(e){
            e.preventDefault();
            var loginContainer=document.getElementById("login-container");
            var registerContainer=document.getElementById("register-container");
            var checkBox=document.getElementById("checkConfirm");
            if(checkBox.checked==true){
                var register = 'regNewUser';
                    var email =$("#newEmail").val();
                    var password =$("#newPassword").val();
                    //alert(email);
                $.ajax({
                url: 'function.php',
                type: 'POST',
                data:{
                    register:register,
                    email:email,
                    password:password},
                success: function(response){
                    document.getElementById('newEmail').value='';
                    document.getElementById('newPassword').value='';
                    document.getElementById('newPasswordConfirm').value='';
                    loginContainer.style.display="block";
                    registerContainer.style.display="none";
                    alert("Usuario registrado");
                },
                error:function(response){
                    alert("No se pudo realizar el registro qlero");
                }
            });
            }
            else{
                alert("Por favor acepta las políticas de privacidad")
            }
        }
        );
        //LOGIN
    });
    $(document).ready(function(){
        $("#loginForm").submit(function(e){
            e.preventDefault();
                var login = 'logUser';
                    var emailLog =$("#emailLogin").val();
                    var passwordLog =$("#passwordLogin").val();
                    //alert(emailLog);
                    
                $.ajax({
                url: 'function.php',
                type: 'POST',
                data:{
                    login:login,
                    emailLog:emailLog,
                    passwordLog:passwordLog},
                success: function(response){
                    console.log(response);
                },
                error:function(res){
                    console.log(res);
                }
            });
        }
        );
        //LOGIN
    });

/*
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}*/
//LOGIN JS CODE VERIFY DATA FROM USER
//send register data into mysql with ajax
/*
$(document).ready(function(){
    $("#registerUser").click(function(e){
        var checkBox=document.getElementById("checkConfirm");
        if(checkBox.checked==true){
            e.preventDefault();
            var register = 'regNewUser';
                var email =$("#newEmail").val();
                var password =$("#newPassword").val();
                //alert(email);
            $.ajax({
            url: 'function.php',
            type: 'POST',
            data:{
                register:register,
                email:email,
                password:password},
            success: function(response){
                alert("Usuario registrado");
            },
            error:function(response){
                alert("No se pudo realizar el registro");
            }
        });
        }
        else{
            alert("Por favor acepta las políticas de privacidad")
        }
    })});
    */