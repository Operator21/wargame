let constructionView = $("#constructionMenu");
let trainingView = $("#trainingMenu");

let mineView = new UnitView("mine", "building", constructionView, [new ResourceAmount(population, 5000), new ResourceAmount(materials, 100)], [new ResourceAmount(mines, 1)]);

let refineryView = new UnitView("refinery", "building", constructionView, [new ResourceAmount(population, 200), new ResourceAmount(materials, 500)], [new ResourceAmount(refineries, 1)]);
let barracksView = new UnitView("barracks", "building", constructionView);
let factoryView = new UnitView("factory", "building", constructionView);

let infantryView = new UnitView("infantry", "unit", trainingView);
let tankView = new UnitView("tank", "unit", trainingView);

