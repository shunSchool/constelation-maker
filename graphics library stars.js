//fill the canvas with provided color
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}

function stroke(style) {
    ctx.strokeStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}
function fill(style) {
    ctx.fillStyle = style;
}

//draw a stroke or fill rectangle with a top left vorner of x, y a width of w and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill"){
   ctx.fillRect(x, y, w, h);
    } else if(mode === "stroke"){
        ctx.strokeRect(x, y, w,h);
    }
   }
   
   //draw a line segment from (x1, y1) to (x2, y2)
   function line(x1, y1, x2, y2) {
       console.log(x1, y1, x2, y2);
       ctx.beginPath();
       ctx.moveTo(x1, y1); //Endpoint 1
       ctx.lineTo(x2, y2); //endpoint 2
       ctx.stroke();    
   }

//draw a circle with center (x, y) and radios of r
   function circle(x, y, r, mode) {
ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
if (mode === "fill") {
    ctx.fill();
} else if (mode === "stroke") {
  ctx.stroke();
    }
}

//draw da triangle
function triangle(x1, y1, x2, y2, x3, y3) {
    console.log(x1, y1, x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1); //vertex 1
    ctx.lineTo(x2, y2); //vertex 2
    ctx.lineTo(x3, y3); //vertex 3
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
}