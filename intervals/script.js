let counter = 60;
let alarm = new Audio("alarm.mp3");

function count() {

    if (counter > 0){
        counter --;
        document.querySelector('h1').innerHTML = counter;}

        else if( counter == 0){
            alarm.play();
            counter --;

        }
     }


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});
