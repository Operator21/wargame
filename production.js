let constructionView = $("#constructionMenu");
let trainingView = $("#trainingMenu");
let queueView = $("#queue");
let queue = new Set();

let infantryUnit = new Unit("infantry", "unit", [new ResourceAmount(playerData.population, 10000), new ResourceAmount(playerData.materials, 2500), new ResourceAmount(playerData.barracks, 1)], [new ResourceAmount(playerData.infantry, 10000), new ResourceAmount(playerData.barracks, 1)], 15);
let tankUnit = new Unit("tank", "unit", [new ResourceAmount(playerData.population, 2000), new ResourceAmount(playerData.materials, 4000), new ResourceAmount(playerData.oil, 500)], [new ResourceAmount(playerData.armor, 500)], 60);

let mineBuilding = new Unit("mine", "building", [new ResourceAmount(playerData.population, 5000), new ResourceAmount(playerData.materials, 100), new ResourceAmount(playerData.factories, 1)], [new ResourceAmount(playerData.mines, 1), new ResourceAmount(playerData.factories, 1)], 10);
let refineryBuilding = new Unit("refinery", "building", [new ResourceAmount(playerData.population, 200), new ResourceAmount(playerData.materials, 500), new ResourceAmount(playerData.factories, 1)], [new ResourceAmount(playerData.refineries, 1), new ResourceAmount(playerData.factories, 1)], 20);
let barracksBuilding = new Unit("barracks", "building", [new ResourceAmount(playerData.population, 40), new ResourceAmount(playerData.materials, 1000), new ResourceAmount(playerData.factories, 1)], [new ResourceAmount(playerData.barracks, 1), new ResourceAmount(playerData.factories, 1)], 20);
let factoryBuilding = new Unit("factory", "building", [new ResourceAmount(playerData.population, 500), new ResourceAmount(playerData.materials, 5000), new ResourceAmount(playerData.factories, 1)], [new ResourceAmount(playerData.factories, 2)], 30);

let infantryView = new UnitView(trainingView, queueView, queue, infantryUnit);
let tankView = new UnitView(trainingView, queueView, queue, tankUnit);

let mineView = new UnitView(constructionView, queueView, queue, mineBuilding);
let refineryView = new UnitView(constructionView, queueView, queue, refineryBuilding);
let barracksView = new UnitView(constructionView, queueView, queue, barracksBuilding);
let factoryView = new UnitView(constructionView, queueView, queue, factoryBuilding);



