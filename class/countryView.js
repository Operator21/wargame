class CountryView {
    constructor(transform, d, fill = ""){
        this.transform = transform;
        this.d = d;
        this.strokeWidth = ".6816";
        
        this.g = $NS("g");
        this.path = $NS("path");
        
        this.g.append(this.path);
        this.setColor("#d0d0d0");

        this.setColor(fill);
    }

    getHtml(){

        //g.setAttribute("transform", this.transform);
        this.path.setAttribute("d", this.d);
        this.path.setAttribute("stroke-width", this.strokeWidth);
        return this.g;
    }

    setColor(color){
        if(color.length > 0)
            this.path.classList.add(color);
    }
}