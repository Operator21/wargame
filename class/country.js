class Country {
    constructor(transform, d){
        this.transform = transform;
        this.d = d;
        this.fill = "#d0d0d0";
        this.strokeWidth = ".6816";
    }

    getHtml(){
        let g = $NS("g");
        let path = $NS("path");

        g.append(path);

        //g.setAttribute("transform", this.transform);
        path.setAttribute("d", this.d);
        path.setAttribute("fill", this.fill);
        path.setAttribute("stroke-width", this.strokeWidth);
        return g;
    }
}