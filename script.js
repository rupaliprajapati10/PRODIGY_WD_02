
let timerDisplay=document.querySelector('.timerDisplay');
let startBtn=document.getElementById('startBtn');
let stopBtn=document.getElementById('stopBtn');
let resetBtn=document.getElementById('resetBtn');
let lapBtn=document.getElementById('lapBtn');
let clearBtn=document.getElementById('clear')

let msec=0o0;
let secs=0o0;
let mins=0o0;

let timerId=null;

startBtn.addEventListener('click',()=>{
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer,10);
});

stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
});

resetBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML=`00 : 00 : 00`
    msec=secs=mins=0o0;
});

lapBtn.addEventListener('click', () => {
    let lapTime = `${formatTime(mins)} : ${formatTime(secs)} : ${formatTime(msec)}`;
    let li = document.createElement('li');
    li.innerText = lapTime;
    lapsList.appendChild(li);
});

clearBtn.addEventListener('click',()=>{
    lapsList.innerHTML='';
});


function startTimer(){
    msec++;
    if(msec==100){
        msec=0o0;
        secs++;
        if(secs==60){
            secs=0o0;
            mins++;
        }
    }

    let msecString=msec<10?`0${msec}`:msec;
    let secsString=secs<10?`0${secs}`:secs;
    let minsString=mins<10?`0${mins}`:mins;

    timerDisplay.innerHTML=`${minsString} : ${secsString} : ${msecString}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}