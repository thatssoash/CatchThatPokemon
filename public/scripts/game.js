//Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var timer = 0;
var caught = false;
var speed = 10;
canvas.width = 512;
canvas.height = 580;
document.body.appendChild(canvas);

//Background Image

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function (){

bgReady = true;

};

bgImage.src = "/assets/images/background1.png";

//Pokemon Image

var pokReady = false;
var pokImage = new Image();
pokImage.onload = function (){

pokReady = true;

};

pokImage.src = "/assets/images/bulb1.png";


//Game Object

var pok = {};
var poksCaught = 0;


//Reset game

var reset = function () {

  pok.x = 35 + (Math.random() * (canvas.width - 64));
    do {
        pok.y = 35 + (Math.random() * (canvas.height - 64));
    }
    while (pok.y < 200)

};

//Mouse Event
window.addEventListener("mousedown", onMouseDown, false);

function onMouseDown(e) {

    if (e.button != 0) return;

    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (pokBody(pok, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / speed);
        reset();
        render();
    }
};

// Body
function pokBody(pok, x, y) {

    if (x <= (pok.x + 35)
        && pok.x <= (x + 35)
        && y <= (pok.y + 35)
        && pok.y <= (y + 35)
    ) {
        speed = speed + 5;
        poksCaught++;
        return true;
    }
    return false;
};

//Score Box Reset
function ResetScore(x, y) {

    if (x > (355)
       && x < (805)
        && y > (70)
       && y < (83)
    ) {
        return true;
    }
    return false;
};

//Speed Box Reset
function ResetSpeed(x, y) {

    if (x > (15)
        && x < (125)
        && y > (70)
        && y < (83)
    ) {
        speed = 10;
        return true;
    }
    return false;
};

//Draw

var render = function () {

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

if (bgReady) {

ctx.drawImage(bgImage, 0, 100);

}

if (pokReady) {

ctx.drawImage(pokImage, pok.x, pok.y);

}

if (caught == true) {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 100);
        }
        caught = false;
}

//Score
    ctx.fillStyle = "rgb(65, 226, 24)";
    ctx.font = "34px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Catch That Pokemon!", 60, 8);
    ctx.font = "20px Helvetica";
    ctx.fillText("Score: " + poksCaught, 5, 80);



    // Reset
    ctx.fillStyle = "rgb(65, 226, 24)";
    ctx.font = "20px Helvetica";
    ctx.fillText("Reset Speed", 5, 60);
    ctx.fillText("Reset Score", 350, 60);

};


//Game loop

var main = function () {

render();


//Request to do Again

requestAnimationFrame(main);

};

//Cross-Browser

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


//Play Time

reset();
main();




















