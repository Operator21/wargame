let clickElement = $("#clickElement");
let hoverElement = $("#hoverElement");
let musicElement = $("#musicElement");

let musicControl = $("musicControl");
let audioControl = $("#audioControl");


let buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    console.log(button);
    button.addEventListener("mouseover", PlayHover);
    button.addEventListener("click", PlayClick);
})

function PlayHover(){
    hoverElement.currentTime = 0;
    hoverElement.play();
}

function PlayClick(){
    clickElement .currentTime = 0;
    clickElement .play();
}

function ChangeMusicVolume(event){
    musicElement.volume = event.target.value;
}

function ChangeAudioVolume(event){
    hoverElement.volume = event.target.value;
    clickElement.volume = event.target.value;
}

function ClosePopUp(a){
    a.closest(".popup").classList.add("hidden");
}

function OpenPopUp(id){
    $(id).classList.remove("hidden");
}