class UnitView{
    constructor(name, type, viewContainer, costArray, gainArray) {
        this.name = name;
        this.type = type;

        this.costArray = costArray;
        this.gainArray = gainArray;
        this.GenerateHTMLView(viewContainer);
    }

    GenerateHTMLView(viewContainer){
        let span = $N("span");
        let img = $N("img");

        span.classList.add("unit");
        let object = this;
        span.addEventListener("click", function() {
            object.Clicked();
        });

        img.src = this.Path;
        span.append(img);
        viewContainer.append(span);
    }

    get Path(){
        return "img/" + this.type + "/" + this.name + ".png";
    }

    Clicked(){
        console.log(this.name);
        this.costArray.forEach(cost => {
            cost.resource.Substract(cost.amount);
        });
        this.gainArray.forEach(gain => {
            gain.resource.Add(gain.amount);
        });
    }
}