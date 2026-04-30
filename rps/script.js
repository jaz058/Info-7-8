function game(){
    if ( )
}
function rock() {
    let random = Math.random();
    let text = document.querySelector("h2");
    if (random < 0.5){
        text.innerHTML = "Congratulations, You Won!!!";
    }
    else {
        text.innerHTML = "Sorry but, You Loose";
    }
}

function paper() {
    let random = Math.random();
    let text = document.querySelector("h2");
    if (random > 0.5){
        text.innerHTML = "Congratulations, You Won!!!";
    }
    else {
        text.innerHTML = "Sorry but, You Loose";
    }
}


function scissors() {
    let random = Math.random();
    let text = document.querySelector("h2");
    if (random > 0.5){
        text.innerHTML = "Congratulations, You Won!!!";
    }
    else {
        text.innerHTML = "Sorry but, You Loose";
    }
}
