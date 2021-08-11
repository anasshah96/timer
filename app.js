
var container = document.getElementById("container")

var mins = +prompt("Enter Minutes")
var sec = +prompt("Enter Seconds")
var milisec = 0;


var minCount = document.getElementById("mins")
var secCount = document.getElementById("sec")


interval = setInterval(timer,10)

function timer(){
    milisec--
    if (milisec <= 0){
        sec--
        secCount.innerHTML = sec
        milisec=100 
    }else if (sec <=0){
        mins--
        minCount.innerHTML = mins
        sec = 60
    }else if (mins <=0){
        mins = 60
    }


    
}

if(sec === 0 && mins === 0){
    clearInterval(interval)
    interval = 0
}
