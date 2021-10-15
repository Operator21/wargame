class UnitView{
    constructor(name, type, viewContainer) {
        this.name = name;
        this.type = type;
        this.GenerateHTMLView(viewContainer);
    }
    GenerateHTMLView(viewContainer){
        let span = $N("span");
        let img = $N("img");

        span.classList.add("unit");

        img.src = this.Path;
        span.append(img);
        viewContainer.append(span);
    }

    get Path(){
        return "img/" + this.type + "/" + this.name + ".png";
    }
}