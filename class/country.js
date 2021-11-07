class Country {
    constructor(name, population, playerControlled, countryView){
        this.name = name;
        this.population = population;
        this.playerControlled = playerControlled;
        this.countryView = countryView;

        if(playerControlled)
            countryView.setColor("playerCountry");

        let object = this;
        this.countryView.path.addEventListener("click", function() {
            OpenPopUp("#countryInfo");
            $("#countryName").innerHTML = object.name.toUpperCase();
            $("#countryPopulation").innerHTML = object.population;
        });
    }

    getHtml(){
        return this.countryView.getHtml();
    }
}