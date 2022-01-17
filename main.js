let cnv = document.getElementById ("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000
cnv.height = 800
//empyy array of stars
let stars = [];

//globL Variables
let mouseX;
let mouseY;

//draw loop
requestAnimationFrame(draw);
function draw() {
    //fill canvas
    background("black");

    //draw stars
    for (let i = 0; i < stars.length; i ++) {
        drawStar(stars[i]);
    }
    requestAnimationFrame(draw);
}

//star functions
function drawStar (aStar) {
    fill ("white")
    circle(aStar.x, aStar.y, 4, "fill")
    for (let i = 0; i < stars.length; i ++) {
        stroke ("white")
        line(stars[i].x, stars[i].y, stars[i].x, stars[i].y);
        //console.log (aStar) 
    }
}


//events
document.addEventListener("mousedown", addStar);
document.addEventListener("mousemove", mousemoveHandler);

function addStar() {
    stars.push({x: mouseX, y: mouseY});
}

function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 

    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}