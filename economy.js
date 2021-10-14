let influence = 100;
let population = 13541767;
let troops = 0;
let materials = 0;
let oil = 0;
let mines = 0;
let refineries = 0;

let resourceDiv = $("#resources");

let influenceControl = UIResource("Political Influence", influence);
let populationControl = UIResource("Population", population);
let troopsControl = UIResource("Mobilized Troops", troops);
let materialsControl = UIResource("Materials", materials);
let oilControl = UIResource("Oil", oil);

let minesControl = UIResource("Mines", mines);
let refineriesControl = UIResource("Refineries", refineries);

console.log(influenceControl);

function UIResource(name, value){
    let span = $N("span");
    let pDesc = $N("p");
    let pVal = $N("p");

    pDesc.innerHTML = name;
    pVal.innerHTML = value;
    
    resourceDiv.append(span);
    span.append(pDesc);
    span.append(pVal);
    span.classList.add("resource");

    return pVal;
}
//TODO FIX THIS
//AddResource()