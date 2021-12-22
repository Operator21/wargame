let resourceDiv = $("#resources");

/*let influence = new Resource("Political Influence", 0, resourceDiv);
let population = new Resource("Population", 13410750, resourceDiv);
let infantry = new Resource("Infantry Strength", 0, resourceDiv);
let armor = new Resource("Armored Strength", 0, resourceDiv);
let materials = new Resource("Materials", 1000, resourceDiv);
let oil = new Resource("Oil", 0, resourceDiv);
let mines = new Resource("Mines", 0, resourceDiv);
let refineries = new Resource("Refineries", 0, resourceDiv);
let barracks = new Resource("Barracks", 0, resourceDiv);
let factories = new Resource("Factories", 5, resourceDiv);*/

let playerData = new PlayerData(0, 13410750, 0, 0, 1000, 0, 0, 0, 0, 5, resourceDiv);
//alert(playerData.ToJson());
let time = 0;
let pause = false;

setInterval(function(){
    if(!pause) {
        let event = eventList.find(e => e.time === time);
        if(event)
            DisplayEvent(event);
        //console.log("resources added");
        playerData.influence.Add(1);
        playerData.materials.Add(20*playerData.mines.value);
        playerData.oil.Add(5*playerData.refineries.value);
        if(queue.size > 0){
            queue.forEach(function(slot) {
                slot.Progress();
            });
        }
        time++;
    }   
}, 1000);