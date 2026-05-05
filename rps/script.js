funtion game (userChoice){
    let randomNum= Math.random();
    let compChoice;
    if (randomNum < 0.33){
        compChoice = "Rock";
    } else if (randomNum < 0.66){
        compChoice = "Paper"
    } else if (randomNum < 1){
         compChoice = "Scissors";
    }

    console.log(compChoice)
    let result= document.querySelector
    ("#result");
    if (userChoice==compChoice){
        result.innerHTML = "Tie";
    }else if (userChoice == "Rock"){
        if (compChoice == "Paper"){
            result.innerHTML = "You lose";
        } else {
            result.innerHTML ="You won";
        }
    }
}

}
    // document.addEventListener('DOMContenttLoaded', function(){
    //     //Your code here
    //     document.querySelectpr("#rock-button").onclick = game("Rock");
    // }

// function rock() {
//     let random = Math.random();
//     let text = document.querySelector("h2");
//     if (random < 0.5){
//         text.innerHTML = "Congratulations, You Won!!!";
//     }
//     else {
//         text.innerHTML = "Sorry but, You Loose";
//     }
// }

// function paper() {
//     let random = Math.random();
//     let text = document.querySelector("h2");
//     if (random > 0.5){
//         text.innerHTML = "Congratulations, You Won!!!";
//     }
//     else {
//         text.innerHTML = "Sorry but, You Loose";
//     }
// }


// function scissors() {
//     let random = Math.random();
//     let text = document.querySelector("h2");
//     if (random > 0.5){
//         text.innerHTML = "Congratulations, You Won!!!";
//     }
//     else {
//         text.innerHTML = "Sorry but, You Loose";
//     }
// }
