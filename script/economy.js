let resourceDiv = $("#resources");

let playerData = new PlayerData(0, 13410750, 10000, 1000, 0, 10, 0, 2, 5, resourceDiv);
//alert(playerData.ToJson());
let time = 0;
let pause = false;

//happens every second
setInterval(function(){
    if(!pause) {
        views.forEach(view => {
            view.UpdateGraphics();
        });

        let event = eventList.find(e => e.time === time);
        if(event)
            DisplayEvent(event);
        //console.log("resources added");
        playerData.influence.Add(1);
        playerData.materials.Add(20*playerData.mines.value);
        playerData.oil.Add(5*playerData.refineries.value);
        if(queue.size > 0){
            queue.forEach(function(slot) {
                slot.Progress();
            });
        }
        time++;
    }   
}, 1000);