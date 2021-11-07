
const hour=document.getElementById('hourhand');
const minute=document.getElementById('minutehand');
const second=document.getElementById('secondhand');

function updateMyClock(){

let d=new Date();

let min=d.getMinutes();
let hr=d.getHours();
let sc=d.getSeconds();

let s=sc*360/60;
let m=min*360/60;
let h=hr*360/12 + min*15/60;

second.setAttribute("transform",`rotate(${s},50,50)`);
minute.setAttribute("transform",`rotate(${m},50,50)`);
minute.setAttribute("transform",`rotate(${h},50,50)`);


}

setInterval(updateMyClock,1000);






//////////////////////////////////////////////////

/*const second = document.querySelector('#secondhand');
const minute= document.querySelector('#minutehand');
const Hour = document.querySelector('#hourhand');



function setDate(){
    const now = new Date() ; // constante qui donne la date d'aujourdhui une fonction qui deja fait dans le java
    const seconds = now.getSeconds();
    //const secDeg = (seconds / 60) * 360 + 90;
    const secDeg = (seconds / 60) * 360 ;
    console.log(secDeg);
    second.style.transform = "rotateZ(" + secDeg + "deg,50)";


    const mins = now.getMinutes();
    const minDeg =  (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minute.style.transform = "rotate(" + minDeg + "50,50)";

    const hour = now.getHours();
    const hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90; 
    Hour.style.transform =  "rotate(" + hourDeg + "50,50)";

    

}

setInterval(setDate,1000);*/