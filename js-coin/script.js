
function head() {
    let random = Math.random();
    let text = document.querySelector("h1");

    if (random < 0.5){
        text.innerHTML = "Congratulations, You Won!!!";
    }
    else {
        text.innerHTML = "Sorry but, You Loose";
    }
}


function tail() {
let random = Math.random();
let text = document.querySelector("h2");

if (random > 0.5){
text.innerHTML = "Congratulations, You Won!!!";
}
else {
text.innerHTML = "Sorry but, You Loose";
}
}
