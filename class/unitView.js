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
            let success = object.Clicked();
            if(!success)
                alert("Not enough resources");
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
        let canBuy = true;
        this.costArray.forEach(cost => {
            if(cost.resource.value < cost.amount) {
                canBuy = false;
            }
        });
        if(canBuy){
            this.costArray.forEach(cost => {
                cost.resource.Substract(cost.amount);
            });
            this.gainArray.forEach(gain => {
                gain.resource.Add(gain.amount);
            });
        }       
        return canBuy;
    }
}