
const body= document.body;
const imageT=document.getElementById("imageT");
let arrimg= ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e","https://images.unsplash.com/photo-1501785888041-af3ef285b470","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee","https://images.unsplash.com/photo-1493558103817-58b2924bce98"]



const button1=document.createElement("button");
button1.id="button1";
button1.innerText="Previous Page";
body.append(button1);

const button2=document.createElement("button");
button2.id="button2";
button2.innerText="Next Page";
body.append(button2);




let index=0;

button2.addEventListener('click',nextClicked);

function nextClicked()
{
    index++;
    if (index >= arrimg.length) {
        index = 0;
    
    }
    imageT.src = arrimg[index];
    imageT.width = 500;   
    imageT.height =500; 
}


button1.addEventListener('click',previousClicked);

function previousClicked()
{
    index--;
    if (index < 0) {
        index = arrimg.length - 1;
    }
    imageT.src = arrimg[index];
   imageT.width = 500;   
    imageT.height =500;  
}





setInterval(function() {
    nextClicked();
}, 3000);