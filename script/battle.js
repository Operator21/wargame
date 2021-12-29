let musicControl = $("#musicControl");
let audioControl = $("#audioControl");      
let progress = $(".splitter"); 
let result = new URLSearchParams(window.location.search).get("result");

let change = 1;
if(result == "czewin")
    change = -1;

let balance = 50;

let audio = new AudioPlayer(1, 1, $A(".button"));
audio.PlaySong("battle_ambient.m4a");

document.querySelectorAll("video").forEach(v => {
    v.volume = 0.2;
});

function changeBalance(value) {
    console.log(balance + " + " + value);
    balance += value;
    progress.style.gridTemplateColumns = balance + "% auto";
}

setInterval(function(){
    changeBalance(change);
    if(balance <= 0){
        window.location = "endscreen.html?result=czewin";
    }
    if(balance >= 100) {
        window.location = "endscreen.html?result=gerwin";
    }
}, 1000);