let constructionView = $("#constructionMenu");
let trainingView = $("#trainingMenu");
let queueView = $("#queue");
let queue = new Set();

let infantryUnit = new Unit("infantry", "unit", [new ResourceAmount(population, 10000), new ResourceAmount(materials, 2500)], [new ResourceAmount(infantry, 10000)], 15);

let infantryView = new UnitView(trainingView, queueView, queue, infantryUnit);
/*let mineView = new UnitView("mine", "building", constructionView, [new ResourceAmount(population, 5000), new ResourceAmount(materials, 100)], [new ResourceAmount(mines, 1)]);

let refineryView = new UnitView("refinery", "building", constructionView, [new ResourceAmount(population, 200), new ResourceAmount(materials, 500)], [new ResourceAmount(refineries, 1)]);
let barracksView = new UnitView("barracks", "building", constructionView, [new ResourceAmount(population, 40), new ResourceAmount(materials, 1000)], [new ResourceAmount(barracks, 1)]);
let factoryView = new UnitView("factory", "building", constructionView, [new ResourceAmount(population, 500), new ResourceAmount(materials, 5000)], [new ResourceAmount(factories, 1)]);

let infantryView = new UnitView(trainingView, );
let tankView = new UnitView("tank", "unit", trainingView, [new ResourceAmount(population, 2000), new ResourceAmount(materials, 4000), new ResourceAmount(oil, 500)], [new ResourceAmount(armor, 500)]);*/

