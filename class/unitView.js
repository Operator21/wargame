class UnitView{
    constructor(viewContainer, queueContainer, queue, unit) {
        this.unit = unit;
        this.queueContainer = queueContainer;
        this.queue = queue;
        this.GenerateHTMLView(viewContainer); 
        this.img;
    }

    GenerateHTMLView(viewContainer){
        //let span = $N("span");
        let img = $N("img");
        this.img = img;

        let object = this;
        //span.classList.add("unit");
        img.classList.add("unit");
        /*events.on("click", span, function(){
            let success = object.Clicked();
            if(!success)
                alert("Not enough resources");
        });    */   
        img.addEventListener("click", function() {
            let success = object.Clicked();
            //if(!success)
                //alert("Not enough resources");
        });

        img.src = this.Path;
        //span.append(img);
        viewContainer.append(img);
    }

    get Path(){
        return "../img/" + this.unit.type + "/" + this.unit.name + ".png";
    }

    Clicked(){
        this.UpdateGraphics();
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
            this.UpdateGraphics();
        }       
        return canBuy;
    }

    CanBuy(){
        let canBuy = true;
        this.unit.costArray.forEach(cost => {
            if(cost.resource.value < cost.amount) {
                canBuy = false;
            }
        });  
        return canBuy;
    }

    UpdateGraphics() {
        if(this.CanBuy()) {
            this.img.classList.remove("locked");
            this.img.classList.add("buyable");
        } else {
            this.img.classList.add("locked");
            this.img.classList.remove("buyable");
        }
    }
}