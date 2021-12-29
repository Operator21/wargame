function $(selector){
    return document.querySelector(selector);
}

function $A(selector) {
    return document.querySelectorAll(selector);
}

function $N(type){
    return document.createElement(type);
}

function $NS(type){
    return document.createElementNS("http://www.w3.org/2000/svg", type);
}

//********************************** */
//********************************** */
//********************************** */

function ClosePopUp(a){
    a.closest(".popup").classList.add("hidden");
}

function OpenPopUp(id){
    $(id).classList.remove("hidden");
}

function PageGoTo(file){
    //FadeoutTransition();
    window.location.href = "../" + file;
}

function GoTo(file){
    //FadeoutTransition();
    window.location.href = file + ".html";
}

function DisplayEvent(event){
    pause = true;
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
            pause = false;
        });
    }); 
}

function Include(type, container, array) {
    array.forEach(path => {
        let scr = $N("script");
        scr.src = "../" + type + "/" + path + ".js";
        container.append(scr);
        console.log(path);
    });
}

function IncludeScript(container, array) {
    Include("script", container, array);
}

function IncludeClass(container, array) {
    Include("class", container, array);
}

function CanBuy(costArray){
    let canBuy = true;
    costArray.forEach(cost => {
        if(cost.resource.value < cost.amount) {
            canBuy = false;
        }
    });  
    return canBuy;
}