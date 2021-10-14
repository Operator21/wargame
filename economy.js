/*let influence = 100;
let population = 13410750;
let troops = 0;
let materials = 0;
let oil = 0;
let mines = 0;
let refineries = 0;*/

let resourceDiv = $("#resources");

/*let influenceControl = UIResource("Political Influence", influence);
let populationControl = UIResource("Population", population);
let troopsControl = UIResource("Mobilized Troops", troops);
let materialsControl = UIResource("Materials", materials);
let oilControl = UIResource("Oil", oil);

let minesControl = UIResource("Mines", mines);
let refineriesControl = UIResource("Refineries", refineries);

console.log(influenceControl);

function UIResource(name, value){
    

    return pVal;
}*/
//TODO FIX THIS
//AddResource()

let influence = new Resource("Political Influence", 0, resourceDiv);
let population = new Resource("Population", 13410750, resourceDiv);
let troops = new Resource("Mobilized Troops", 0, resourceDiv);
let materials = new Resource("Materials", 0, resourceDiv);
let oil = new Resource("Oil", 0, resourceDiv);
let mines = new Resource("Mines", 0, resourceDiv);
let refineries = new Resource("Refineries", 0, resourceDiv);
let barracks = new Resource("Barracks", 0, resourceDiv);
let factories = new Resource("Factories", 0, resourceDiv);

setInterval(function(){
    //console.log("resources added");
    influence.Add(1);
}, 1000)