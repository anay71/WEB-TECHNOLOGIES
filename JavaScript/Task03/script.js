const body= document.getElementById("body");
const btn= document.getElementById("btn");

let mode="light";

btn.addEventListener('click',convertnow);
function convertnow()
{
    if(mode=== "light")
    {
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
        btn.innerText="Switch to Light Mode";
        mode="dark";
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "#121212";
        btn.innerText="Switch to Dark Mode";
        mode= "light";
    }
}