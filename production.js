let constructionView = $("#constructionMenu");
let trainingView = $("#trainingMenu");
let queueView = $("#queue");
let queue = new Set();

let infantryUnit = new Unit("infantry", "unit", [new ResourceAmount(population, 10000), new ResourceAmount(materials, 2500)], [new ResourceAmount(infantry, 10000)], 15);
let tankUnit = new Unit("tank", "unit", [new ResourceAmount(population, 2000), new ResourceAmount(materials, 4000), new ResourceAmount(oil, 500)], [new ResourceAmount(armor, 500)], 60);

let mineBuilding = new Unit("mine", "building", [new ResourceAmount(population, 5000), new ResourceAmount(materials, 100)], [new ResourceAmount(mines, 1)], 120);
let refineryBuilding = new Unit("refinery", "building", [new ResourceAmount(population, 200), new ResourceAmount(materials, 500)], [new ResourceAmount(refineries, 1)], 200);
let barracksBuilding = new Unit("barracks", "building", [new ResourceAmount(population, 40), new ResourceAmount(materials, 1000)], [new ResourceAmount(barracks, 1)], 100);
let factoryBuilding = new Unit("factory", "building", [new ResourceAmount(population, 500), new ResourceAmount(materials, 5000)], [new ResourceAmount(factories, 1)], 300);

let infantryView = new UnitView(trainingView, queueView, queue, infantryUnit);
let tankView = new UnitView(trainingView, queueView, queue, tankUnit);

let mineView = new UnitView(constructionView, queueView, queue, mineBuilding);
let refineryView = new UnitView(constructionView, queueView, queue, refineryBuilding);
let barracksView = new UnitView(constructionView, queueView, queue, barracksBuilding);
let factoryView = new UnitView(constructionView, queueView, queue, factoryBuilding);



