let cnv = document.getElementById ("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000
cnv.height = 800
//empyy array of stars
let stars = [];
//draw loop
requestAnimationFrame(draw);
function draw() {
    //fill canvas
    background("black");

    //draw stars
    for (let i = 0; i < stars.length; i ++) {
        drawStar();
    }
    requestAnimationFrame(draw);
}

//star functions
function drawStar (aStar) {
    fill ("white")
    circle(aStar.x, aStar.y, 4)
}

function addStar() {
    stars.push()
}
//events
document.addEventListener("mouseup", clickHandler);

//function clickHandler(event) {
//    if (event)
//}