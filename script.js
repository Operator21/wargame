function ClosePopUp(a){
    a.closest(".popup").classList.add("hidden");
}

function OpenPopUp(id){
    $(id).classList.remove("hidden");
}

/*function FadeoutTransition(){
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
}*/

function GoTo(file){
    //FadeoutTransition();
    window.location.href = file + ".html";
}

function DisplayEvent(event, interval){
    eventWindow.style.display = "grid";
    eventTitle.innerHTML = event.title; 
    eventDesc.innerHTML = event.description;
    eventChoiceList.innerHTML = "";
    event.choices.forEach(choice => {
        let button = $N("button");
        button.innerHTML = choice.description;
        eventChoiceList.append(button);
        button.addEventListener("click", function(){
            if(choice.action)
                window[choice.action]();
            eventWindow.style.display = "none";
        });
    }); 
}