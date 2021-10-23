var light_red,light_yellow,light_green;
var lightInterval;
var yellowOn=false;
var blinkOrderOn;

function init(){
    light_red=document.getElementById("light_red");
    light_yellow=document.getElementById("light_yellow");
    light_green=document.getElementById("light_green");
}

function yellowBlink(){
    off();
    lightInterval = setInterval(yellow_blink,1000);
}

function yellow_blink(){
    console.log("switch");
    if (yellowOn){
        light_yellow.classList.remove("yellowLight");
        light_yellow.classList.add("lightOff")
    } else {
        light_yellow.classList.remove("lightOff");
        light_yellow.classList.add("yellowLight")
    }
    yellowOn=!yellowOn;
}

function allBlink(){
    off();
    blinkOrderOn=setInterval(blinkOrder,4500);
}

function off(){
    clearInterval(blinkOrderOn);
    clearInterval(lightInterval);
    light_yellow.classList.remove("yellowLight");
    light_yellow.classList.add("lightOff");
    light_red.classList.remove("redLight");
    light_red.classList.add("lightOff");
    light_green.classList.remove("greenLight");
    light_green.classList.add("lightOff");
}

function on(){
    clearInterval(blinkOrderOn);
    clearInterval(lightInterval);
    light_yellow.classList.add("yellowLight");
    light_yellow.classList.remove("lightOff");
    light_red.classList.add("redLight");
    light_red.classList.remove("lightOff");
    light_green.classList.add("greenLight");
    light_green.classList.remove("lightOff");
}

function blinkOrder(){
    redOn();
    setTimeout(yellowOn1,1000);
    setTimeout(greenOn,2000);
    setTimeout(yellowOn2,3000);

}

function redOn(){
    light_yellow.classList.remove("yellowLight");
    light_yellow.classList.add("lightOff");
    light_red.classList.remove("lightOff");
    light_red.classList.add("redLight");
}

function yellowOn1(){
    light_red.classList.remove("redLight");
    light_red.classList.add("lightOff");
    light_yellow.classList.remove("lightOff");
    light_yellow.classList.add("yellowLight");
}

function greenOn(){
    light_yellow.classList.remove("yellowLight");
    light_yellow.classList.add("lightOff");
    light_green.classList.remove("lightOff");
    light_green.classList.add("greenLight");
}

function yellowOn2(){
    light_green.classList.remove("greenLight");
    light_green.classList.add("lightOff");
    light_yellow.classList.remove("lightOff");
    light_yellow.classList.add("yellowLight");
}

