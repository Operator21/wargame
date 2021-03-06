class PlayerData {
    constructor(influence, population, military, materials, oil, mines, refineries, barracks, factories, resourceDiv) {
        this.influence = new Resource("Political Influence", influence, resourceDiv);
        this.population = new Resource("Population", population, resourceDiv);
        this.military = new Resource("Military Strength", military, resourceDiv);
        this.materials = new Resource("Materials", materials, resourceDiv);
        this.oil = new Resource("Oil", oil, resourceDiv);
        this.mines = new Resource("Mines", mines, resourceDiv);
        this.refineries = new Resource("Refineries", refineries, resourceDiv);
        this.barracks = new Resource("Barracks", barracks, resourceDiv);
        this.factories = new Resource("Factories", factories, resourceDiv);
        this.resourceDiv = resourceDiv;
    }

    ToJson(){
        return JSON.stringify(this);
    }
}