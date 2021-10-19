class UnitView{
    constructor(viewContainer, queueContainer, queue, unit) {
        this.unit = unit;
        this.queueContainer = queueContainer;
        this.queue = queue;
        this.GenerateHTMLView(viewContainer);
    }

    GenerateHTMLView(viewContainer){
        let span = $N("span");
        let img = $N("img");

        span.classList.add("unit");
        let object = this;
        /*events.on("click", span, function(){
            let success = object.Clicked();
            if(!success)
                alert("Not enough resources");
        });    */   
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
        return "img/" + this.unit.type + "/" + this.unit.name + ".png";
    }

    Clicked(){
        console.log(this.unit.name);
        let canBuy = true;
        this.unit.costArray.forEach(cost => {
            if(cost.resource.value < cost.amount) {
                canBuy = false;
            }
        });
        if(canBuy){
            this.unit.costArray.forEach(cost => {
                cost.resource.Substract(cost.amount);
            });
            this.queue.add(new QueueSlot(this.unit, this.queueContainer, this.queue));
        }       
        return canBuy;
    }
}