let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours= 0;



let displayTime = document.getElementById("time");

let time = null;


function watch(){
    milliseconds ++;
    if(milliseconds == 1000){ 
        milliseconds = 00;
        seconds++;
        if(seconds == 60){ 
            seconds = 0;
            minutes++;
            if(minutes == 60){ 
                minutes = 0;
                hours++;
            }
        }
    }



   
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function start(){
   
    if(time !== null){
        clearInterval(time);
    }
     time = setInterval(watch);
}

function stop(){
    
    clearInterval(time);
}


function reset(){
    clearInterval(time);
  
    
     displayTime.innerHTML = "00:00:00.000"
}