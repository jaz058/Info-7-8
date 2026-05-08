document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const snare = new Audio("sounds/snare.wav");
    const clap = new Audio("sounds/clap.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const snareDiv = document.querySelector("#snare");
    const clapDiv = document.querySelector("#clap");
    const cowbellDiv = document.querySelector("#cowbell");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#open");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");



    window.addEventListener("keydown", function(event){
        if (event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");

        }else if (event.key == "s") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");

        }else if (event.key == "r") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");

        }else if (event.key == "f") {
            cowbell.currentTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");

        }else if (event.key == "d") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");

        }else if (event.key == "g") {
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");

        }else if (event.key == "w") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");

        }else if (event.key == "q") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
    }
})

    window.addEventListener("keyup", function (event){
        if (event.key == "a"){
            kickDiv.classList.remove("active");
        } else if (event.key == "s"){
            snareDiv.classList.remove("active");
        } else if (event.key == "r"){
            clapDiv.classList.remove("active");
        } else if (event.key == "f"){
            cowbellDiv.classList.remove("active");
        } else if (event.key == "d"){
            hihatDiv.classList.remove("active");
        } else if (event.key == "g"){
            openhatDiv.classList.remove("active");
        } else if (event.key == "w"){
            tomDiv.classList.remove("active");
        } else if (event.key == "q"){
            yuhDiv.classList.remove("active");
    }
})
    })
