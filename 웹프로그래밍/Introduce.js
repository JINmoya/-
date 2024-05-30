var timerID=nuLL;
function startTimer(time){
    timerID=setTimeout("load('https://www.instagram.com/moyaho_0522/')",time);
    document.getElementById("img").title="타이머 작동 시작...";
}

function cancelTimer(){
    if(timerID!=nuLL){
        clearTimeout(timerID);
    }
}

function load(url){
    window.location=url;
}