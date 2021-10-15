let constructionView = $("#constructionMenu");
let trainingView = $("#trainingMenu");

new UnitView("mine", "building", constructionView);
new UnitView("refinery", "building", constructionView);
new UnitView("barracks", "building", constructionView);
new UnitView("factory", "building", constructionView);

new UnitView("infantry", "unit", trainingView);
new UnitView("tank", "unit", trainingView);