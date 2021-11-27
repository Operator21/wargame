class QueueSlot {
    constructor(unit, queueContainer, queue) {
        this.unit = unit;
        this.progress = 0;
        this.max = unit.buildTime;
        this.queue = queue;

        this.span = $N("span");
        //this.img = $N("img");
        this.progressBar = $N("progress");
        this.video = $N("video");
        this.video.autoplay = true;
        this.video.loop = true;

        switch(unit.name){
            case "infantry":
                this.video.src = "video/train.webm";    
                break;
            case "tank":
                this.video.src = "video/tank.webm";    
                break;
            default:
                this.video.src = "video/crane.webm";               
        }
            

        this.span.classList.add("queueSlot");
        //this.img.src = "img/" + this.unit.type + "/" + this.unit.name + ".png";
        
        console.log(this.progressBar);
        this.progressBar.value = 0;
        this.progressBar.max = this.max;
        //this.span.append(this.img);
        this.span.append(this.progressBar);
        this.span.append(this.video);
        queueContainer.append(this.span);
    }

    Progress() {
        if(this.progress < this.max){
            this.progress++;
            this.progressBar.value = this.progress;
        } else { 
            this.BuildingFinished();
        }
    }

    BuildingFinished() {
        this.span.remove();
        this.unit.gainArray.forEach(gain => {
            gain.resource.Add(gain.amount);
        });
        console.log("Queued builds: " + this.queue.length);
        this.queue.delete(this);
        //console.log(this.queue.indexOf(this));
        //alert("done");
    }
}