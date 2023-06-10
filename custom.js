var second=document.getElementsByClassName('second')[0];
var minute=document.getElementsByClassName('minute')[0];
var hour=document.getElementsByClassName('hour')[0];
let session=document.getElementsByClassName('session')[0];


let second2=0;
let minute2=0;
let hour2=0;
setInterval(() => {
    second.innerHTML=++second2;
    if(second.innerHTML==60){
        second2=0;
        minute2++;
    }
    minute.innerHTML=minute2;
    if (minute.innerHTML==60) {
        minute.innerHTML=0;
        minute2=0;
        hour2++;
    }
    hour.innerHTML=hour2;
 
    if(hour2>12) {
        session.innerHTML="PM";
        if(hour2==23){
            if(minute2==60){
                minute2=0;
                hour2=0;
                second2=0;
            }
        }
    }
    
},1000);