let resourceDiv = $("#resources");

let influence = new Resource("Political Influence", 0, resourceDiv);
let population = new Resource("Population", 13410750, resourceDiv);
let infantry = new Resource("Infantry Strength", 0, resourceDiv);
let armor = new Resource("Armored Strength", 0, resourceDiv);
let materials = new Resource("Materials", 1000, resourceDiv);
let oil = new Resource("Oil", 0, resourceDiv);
let mines = new Resource("Mines", 0, resourceDiv);
let refineries = new Resource("Refineries", 0, resourceDiv);
let barracks = new Resource("Barracks", 0, resourceDiv);
let factories = new Resource("Factories", 0, resourceDiv);

setInterval(function(){
    //console.log("resources added");
    influence.Add(1);
    materials.Add(1*mines.value);
    oil.Add(1*refineries.value);
}, 1000)