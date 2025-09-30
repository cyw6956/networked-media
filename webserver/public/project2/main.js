//constants and starting variables
let hungerLevel = 50;
let sanityLevel = 50;
const MAXFILLING = 30;
const MINFILLING = 10;

window.onload = () => {
    //getting the html elements and turning them into variables to alter
    let feedBttn = document.getElementById("feed-button");
    let hungerBar = document.getElementById("hunger-progress");
    let sanityBar = document.getElementById("sanity-progress");
    let image = document.getElementById("sitting");
    let video = document.getElementById("video");
    let dead = document.getElementById("death");

    //raising hunger level when clicking button, playing video
    feedBttn.onclick = () => {
        //feeding the human
        hungerLevel += Math.floor(Math.random()*(MAXFILLING-MINFILLING+1) + MINFILLING);
        if (hungerLevel>100) {
            hungerLevel = 100;
        }
        console.log(hungerLevel);
        hungerBar.style.height = String(hungerLevel)+"%";
        video.play();
        console.log(video.play());
    
    }

    //decrease/increase sanity/hunger every 10 mins
    //check to see if levels are at 0
    setInterval(()=>{
        if(hungerLevel >= 70) {
            sanityLevel ++;
            sanityBar.style.height = String(sanityLevel)+"%";
            if (sanityLevel>100) {
                sanityLevel=100;
            }
        }
        else if(hungerLevel <= 30) {
            sanityLevel --;
            sanityBar.style.height = String(sanityLevel)+"%";
            if (sanityLevel<0) {
                sanityLevel=0;
            }
        }
        if(hungerLevel>0) {
            let randomDrop = Math.floor(Math.random()*(10-5+1)+5);
            hungerLevel= hungerLevel-randomDrop;
            hungerBar.style.height = String(hungerLevel)+"%";
        }
        if(hungerLevel<0) {
            hungerLevel=0;
            hungerBar.style.height = "0%";
        }

        if(hungerLevel<1 && sanityLevel<1 ) {
        dead.style.visibility="visible";
        }
        console.log(hungerLevel);
        console.log(sanityLevel);
    }, 600000);

    
}
