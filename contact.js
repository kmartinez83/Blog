
function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var comments = document.contactForm.comments.value;
    

    var nameErr = emailErr = mobileErr = commentsErr = true; 

    if(name == ""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr", "Please enter your email");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr", "Please enter a valid email address");
        }else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(mobile == ""){
        printError("mobileErr", "Please enter your phone number");
    }else{
        var regex = /^[0-9]{10}$/;
        if(regex.test(mobile) === false){
            printError("mobileErr", "Please enter a valid phone number");
        }else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    if(comments == ""){
        printError("commentsErr", "Please enter a valid message ..");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(comments) === false){
            printError("commentsErr", "Please enter a valid message ..");
        }else{
            printError("commentsErr", "");
            commentsErr = false;
        }
    }

    

    if(nameErr || emailErr || mobileErr || commentsErr   == true){
        return false;
    }else{
        alert('You\'ve submitted the form...');
    }
}

