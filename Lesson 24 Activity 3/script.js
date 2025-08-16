function myfunc() {
    const myname = document.getElementById("name").value;
    const myemail = document.getElementById("email").value;
    const myage = document.getElementById("age").value;
    const mymobile = document.getElementById("mobile").value;
    const msgBox = document.getElementById("msgbox");

    let message = '';

    if (myemail == '') {
        message = "Enter an Email";
        msgBox.style.color = 'red';
    }
    else if (myname == '') {
        message = "Enter your Name";
        msgBox.style.color = 'red';
    }
    else if (myage === '' || myage == NaN || (myage < 0) || (myage > 120)) {
        message = "Enter your Age Correctly";
        msgBox.style.color = 'red';
    }
    else if (mymobile == '') {
        message = "Enter Correct Mobile Number";
        msgBox.style.color = 'red';
    }
    else {
        message = "Login Successful";
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;


}