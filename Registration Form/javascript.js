function signup(){
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("name" , name);
    localStorage.setItem("email" , email);
    localStorage.setItem("password" , password);
    }
    
    function login(){
        console.log("login")
       let loginemail = document.getElementById("email1").value;
       let loginpassword = document.getElementById("password1").value;
    
        if (loginemail == localStorage.getItem("email") && loginpassword == localStorage.getItem("password")){
            document.write("Password Correct Welcome   " + localStorage.getItem("name"))
        }
        else{document.write("InCorrect")}
    
    }