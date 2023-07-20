for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
     handelClick(this.innerHTML);
     flash(this.innerHTML);
});}

function handelClick(x){var audio;
    if(x=="w")audio=new Audio("sounds/crash.mp3");
    else if(x=="a")audio=new Audio("sounds/kick-bass.mp3");
    else if(x=="s")audio=new Audio("sounds/snare.mp3");
    else if(x=="d")audio=new Audio("sounds/tom-1.mp3");
    else if(x=="j")audio=new Audio("sounds/tom-2.mp3");
    else if(x=="k")audio=new Audio("sounds/tom-3.mp3");
    else audio=new Audio("sounds/tom-4.mp3");

    audio.play();

}
document.addEventListener("keydown",function(event){
 handelClick(event.key);
 flash(event.key);
});
function flash(x){
    document.querySelector("."+x).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+x).classList.remove("pressed");
    },300);
}