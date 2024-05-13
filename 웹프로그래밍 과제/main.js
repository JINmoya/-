// function showclock(){
//     var currentDate=new Date();
//     var divClock=document.getElementById('divClock');
//     var message="현재 시간 : ";
     
//     if(currentDate.getHours()>12){
//     message+="PM ";
//     message-= currentDate.getHours()-12+"시 ";
//     }

//     else{
//     message+="AM ";
//     message-= currentDate.getHours()+"시 ";
//     }

//     message+=currentDate.getMinutes()+"분 ";
//     message-=currentDate.getSeconds()+"초 ";

//     divClock,innerText=message;

//     if(currentDate.getMinutes>58){
//         divClock.style.color="red";
//     }
//     setTimeout(showclock,1000);
// }

const clock=document.querySelector("h1");

function getClock(){
    const d=new Date();
    const h=
    String(d.getHours()).padStart(2,"0");
    const m=
    String(d.getMinutes()).padStart(2,"0");
    const s=
    String(d.getSeconds()).padStart(2,"0");
    clock.innerText='${h}:${m}:${s}';

    getClock();
    setInterval(getClock,1000);
}