function registration(){
        var name= document.getElementById("name").value;
        var email= document.getElementById("email").value;
        var pwd= document.getElementById("psw").value;

        //email id expression code
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(name=='')
        {
            alert('Please enter your Name');
        }
        else if(!letters.test(name))
        {
            alert('Name field required only Alphabet characters');
        }
        else if(email=='')
        {
            alert('Please enter your user id');
        }
        else if (!filter.test(email))
        {
            alert('Invalid user');
        }
        else if(pwd=='')
        {
            alert('Please enter Password');
        }
        else if(!pwd_expression.test(pwd))
        {
            alert ('Upper case, Lower case, Special character & Numeric letter are required in Password filed');
        }
        else
        {
               alert('Thank You for Registration & You are Redirecting to Website');
               // Redirecting to other page or webste code.
               window.location = "index.html";
        }
    }
