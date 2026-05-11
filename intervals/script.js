let counter = 60;

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;}

    const alarm = new Audio("sounds/alarm");

    function sound(){
    if (event.key == "0") {
            alarm.currentTime = 0;
            alarm.play();}
    }

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});
