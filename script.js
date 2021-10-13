function AssignSoundEffects(array){
    array.forEach(button => {
        console.log(button);
        button.addEventListener("mouseover", PlayHover);
        button.addEventListener("click", PlayClick);
    })
}

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

function FadeoutTransition(){
    let fader = $N("div");
    fader.classList.add("fader");
    $("body").append(fader);
    let x = 0;
    setInterval(function(){
        if(x<100){
            x++;
            fader.style.opacity = x/100;
        } else {
            clearInterval(this);
        }        
    }, 10);
}

function GoTo(file){
    FadeoutTransition();
    //window.location.href = file + ".html";
}