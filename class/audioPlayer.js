class AudioPlayer {
    constructor(musicVolume, audioVolume, array) {
        this.hoverPlayer = $N("audio");
        this.clickPlayer = $N("audio");
        this.musicPlayer = $N("audio");
        this.musicPlayer.setAttributeNode(document.createAttribute("autoplay"));
        //this.musicPlayer.setAttributeNode(document.createAttribute("loop"));

        $("body").append(this.hoverPlayer);
        $("body").append(this.clickPlayer);
        $("body").append(this.musicPlayer);

        if(localStorage.getItem("music")) {
            this.ChangeMusicVolume(localStorage.getItem("music"));
        } else {
            this.ChangeMusicVolume(musicVolume);
        }

        if(localStorage.getItem("audio")) {
            this.ChangeAudioVolume(localStorage.getItem("audio"));
        } else {
            this.ChangeAudioVolume(audioVolume);
        }

        this.SetSource(this.hoverPlayer, "hover.ogg");
        this.SetSource(this.clickPlayer, "click.ogg");

        this.AssignButtonSoundEffects(array);
    }

    AssignButtonSoundEffects(array){
        let object = this;
        array.forEach(button => {
            //console.log(this);
            button.addEventListener("mouseover", function() {
                object.PlayHover(object);
            });
            button.addEventListener("click", function() {
                object.PlayClick(object);
            });
        });
    }

    PlayHover(object){
        //console.log(this);
        object.hoverPlayer.currentTime = 0;
        object.hoverPlayer.play();
    }
    
    PlayClick(){
        this.clickPlayer.currentTime = 0;
        this.clickPlayer.play();
    }

    PlaySong(path, loop = true){
        this.SetSource(this.musicPlayer, path);
        this.musicPlayer.currentTime = 0;
        this.musicPlayer.loop = loop;
        this.musicPlayer.play();
    }

    PlaySongList(array){
        let index = 0;
        this.SetSource(this.musicPlayer, array[index]);
        this.musicPlayer.addEventListener("ended", () => {
            if(index+1 < array.length)
                index++;
            else
                index = 0;
            this.SetSource(this.musicPlayer, array[index]);
            this.musicPlayer.play();
        });
    }
    
    ChangeVolume(player, value){
        player.volume = value;
    }

    ChangeMusicVolume(value){
        this.ChangeVolume(this.musicPlayer, value);
        localStorage.setItem("music", value);
    }

    ChangeAudioVolume(value){
        this.ChangeVolume(this.hoverPlayer, value);
        this.ChangeVolume(this.clickPlayer, value);
        localStorage.setItem("audio", value);
    }

    SetSource(player, path){
        player.src = "../sound/" + path;
    }   
}