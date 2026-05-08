document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const sanre = new Audio("sounds/sanre.wav");
    const clap = new Audio("sounds/clap.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const open = new Audio("sounds/open.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = cocument.queryselector("#kick");
    const snareDiv = cocument.queryselector("#snare");
    const clapDiv = cocument.queryselector("#clap");
    const cowbellDiv = cocument.queryselector("#cowbell");
    const hihatDiv = cocument.queryselector("#hihat");
    const openDiv = cocument.queryselector("#open");
    const tomDiv = cocument.queryselector("#tom");
    const yuhDiv = cocument.queryselector("#yuh");



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

        }else if (event.key == "e") {
            open.currentTime = 0;
            open.play();
            openDiv.classList.add("active");

        }else if (event.key == "w") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");

        }else if (event.key == "q") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
    })

    window.addEventListener("keyup", function (event)){
        if (event.key == "a"){
            kickDiv.classList.remove("active");
        } else if (event.key == "s"){
            snereDiv.classList.remove("active");
        } else if (event.key == "r"){
            clapDiv.classList.remove("active");
        } else if (event.key == "f"){
            cowbellDiv.classList.remove("active");
        } else if (event.key == "d"){
            hihatDiv.classList.remove("active");
        } else if (event.key == "e"){
            openDiv.classList.remove("active");
        } else if (event.key == "w"){
            tomDiv.classList.remove("active");
        } else if (event.key == "q"){
            yuhDiv.classList.remove("active");
    }
})


