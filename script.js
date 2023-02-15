const tl=gsap.timeline()
tl.from (".navigation500MaxOption", {x:300, opacity:0, duration:0.4, stagger:0.2})
    .from ("h2", {opacity:0, duration:0.5, stagger:0.2}) 

gsap.from (".pageDescription", {duration: 1.5, height:"1px"});  
gsap.from(".btnVector", {delay:0.5,scale:0, duration:1.5,ease:"power3.out", rotation:"20deg", stagger:0.2});
gsap.to(".vectorContact", {delay:2, duration:1, rotation:"360deg"})
gsap.to(".hello", {delay:3,duration:0.5, opacity:0, repeat:1, yoyo:true})

const tlBalloon=gsap.timeline({paused:true})
tlBalloon.to(".balloonSVG", {opacity:"100", y:-2000, x:-2000, duration:15})

const balloonBtn=document.querySelector("#balloonBtn");

balloonBtn.addEventListener("click",balloonFly)
    function balloonFly(){
        const balloonColor=document.querySelector(".balloonColor");
        const colorOptions=["#1C6DD0", "#FFBF00", "#3A9823","#EB1D36", "#590696"]  
        let randomColor=colorOptions[Math.floor(Math.random() * colorOptions.length)];
        balloonColor.style.fill = randomColor;
        tlBalloon.restart()
    }
