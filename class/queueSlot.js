class QueueSlot {
    constructor(unit, queueContainer, queue) {
        this.unit = unit;
        this.progress = 0;
        this.max = unit.buildTime;
        this.queue = queue;

        this.progressBar = $N("progress");
        console.log(this.progressBar);
        this.progressBar.value = 0;
        this.progressBar.max = this.max;
        queueContainer.append(this.progressBar);
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
        this.progressBar.remove();
        this.unit.gainArray.forEach(gain => {
            gain.resource.Add(gain.amount);
        });
        console.log("Queued builds: " + this.queue.length);
        this.queue.delete(this);
        //console.log(this.queue.indexOf(this));
        //alert("done");
    }
}