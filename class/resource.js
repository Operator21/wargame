class Resource{
    constructor(name, startValue, viewContainer){
        let desc = $N("p");
        let val = $N("p");

        this.name = name;
        this.viewElement = val;
        this.value = startValue;      

        desc.innerHTML = name;
        this.GenerateHTMLView(desc,val,viewContainer);
    }

    Add(value){
        this.value += value;
        this.RefreshView();
    }

    Substract(value) {
        this.value -= value;
        this.RefreshView();
    }

    Modify(value) {
        this.value = value;
        this.RefreshView();
    }

    Get() {
        return this.value;
    }

    RefreshView(){
        if(this.value > 999999){
            this.viewElement.innerHTML = (this.value/1000000).toFixed(1) + "M";
        }else if(this.value > 999){
            this.viewElement.innerHTML = (this.value/1000).toFixed(1)  + "k";
        } else {
            this.viewElement.innerHTML = this.value;
        }       
        //console.log("resource refresh");
    }

    GenerateHTMLView(desc, val, container){
        let span = $N("span");
        container.append(span);
        span.append(desc);
        span.append(val);
        span.classList.add("resource");
        this.RefreshView();
    }
}