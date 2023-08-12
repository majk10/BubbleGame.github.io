var timer = 60;
var scoure = 0;
var hitrn = 0;
function increaseScoure(){
    scoure += 10;
    document.querySelector("#scoreval").textContent = scoure;
}
function makeBubble(){

var clutter = "";

for (var i = 0; i <= 80; i++){  
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".val123").textContent = timer;
        }
        else{
            clearInterval(timerint)
        }
    },1000)

}
function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}
document.querySelector(".pbtm").addEventListener("click",function(dets){
   var clickNumber = console.log(Number(dets.target.textContent)); 
   if(clickNumber === hit){
    increaseScoure();
    makeBubble();
    getNewHit();
   }  
});
runTimer();
makeBubble();   
getNewHit(); 
