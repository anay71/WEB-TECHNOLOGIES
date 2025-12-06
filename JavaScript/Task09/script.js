
function showDiv1() {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
}

function showDiv2() {
    div2.style.display = "block";
    div1.style.display = "none";
    div3.style.display = "none";
}

function showDiv3() {
    div3.style.display = "block";
    div2.style.display = "none";
    div1.style.display = "none";
}





const body= document.getElementById("body");

const date = new Date();          
const hour = date.getHours();     
const greetingText = document.getElementById("greeting");

if (hour < 12) {
    greetingText.innerHTML = "Good Morning!";
} 
else if (hour < 18) {
    greetingText.innerHTML = "Good Afternoon!";
} 
else {
    greetingText.innerHTML = "Good Evening!";
}






const btn= document.getElementById("btn");

let mode="light";

btn.addEventListener('click',convertnow);

function convertnow()
{
    if(mode=== "light")
    {
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
        btn.innerText= "Light Mode";
        mode="dark";
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "#121212";
        btn.innerText= "Dark Mode";
        mode= "light";
    }
}




const submit=document.getElementById("submit");

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

const nameC = document.getElementById("nameC");
const emailC = document.getElementById("emailC");
const messageC = document.getElementById("messageC");

const nameSpan = document.getElementById("nameSpan");
const emailSpan = document.getElementById("emailSpan");
const messageSpan = document.getElementById("messageSpan");

submit.addEventListener('click',formValidate)

function formValidate(event) {

    event.preventDefault();   

    let hasERR = false;
    const emailRegex=/\S+@\S+\.\S+/;
    const nameRegex=/^[a-zA-Z]+$/;

    let nameCatch = nameC.value.trim();
    let emailCatch = emailC.value.trim();
    let messageCatch = messageC.value.trim();

    if (nameCatch==="") {
        hasERR = true;
        nameSpan.innerText = "Name field cannot be empty!";
        nameSpan.style.color = "red";
    }
    else{
        if(!nameRegex.test(nameCatch))
        {
            hasERR = true;
            nameSpan.innerText = "Please, provide the proper name!";
            nameSpan.style.color = "red";
        }
        
    }

    if (emailCatch === "") {
        hasERR = true;
        emailSpan.innerText = "Email field cannot be empty!";
        emailSpan.style.color = "red";
    }
    else{
        if (!emailRegex.test(emailCatch))
        {
            hasERR = true;
            emailSpan.innerText = "Email format is not followed";
            emailSpan.style.color = "red";
        }
       
    }

    if (messageCatch === "") {
        hasERR = true;
        messageSpan.innerText = "Message field cannot be empty!";
        messageSpan.style.color = "red";
    }
    else{
        if (messageCatch.length < 10)
        {
            hasERR = true;
            messageSpan.innerText = "Message contain minimum 10 characters!";
            messageSpan.style.color = "red";
        }
        
    }

    if (!hasERR){
        nameC.value = "";
        emailC.value = "";
        messageC.value = "";
        alert("Thanks for contact.");
    }
}
