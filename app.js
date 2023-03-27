

const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext("2d");

/*GRADIENT STYLES*/

const rainbowGradientStyle = canvasContext.createLinearGradient(0,0,220,200);
rainbowGradientStyle.addColorStop("0","red");
rainbowGradientStyle.addColorStop("0.125","orange");
rainbowGradientStyle.addColorStop("0.25","yellow");
rainbowGradientStyle.addColorStop("0.375","green");
rainbowGradientStyle.addColorStop("0.5","cyan");
rainbowGradientStyle.addColorStop("0.625","blue");
rainbowGradientStyle.addColorStop("0.75","purple");
rainbowGradientStyle.addColorStop("0.875","magenta");
rainbowGradientStyle.addColorStop("1","red");

const monochromeGradientStyle = canvasContext.createLinearGradient(0,0,220,200);
monochromeGradientStyle.addColorStop("0","black");
monochromeGradientStyle.addColorStop("1","white");

const sunsetGradientStyle = canvasContext.createLinearGradient(0,0,220,200);
sunsetGradientStyle.addColorStop("0","red");
sunsetGradientStyle.addColorStop("1","yellow");

const fillStyleArr = [rainbowGradientStyle, monochromeGradientStyle, sunsetGradientStyle];

/*EXTRA SETUP*/

canvas.width = window.innerWidth;
canvasContext.fillStyle = fillStyleArr[1];
canvasContext.lineWidth = 5;
canvasContext.strokeStyle = 'black'


const pushFrontButton = document.getElementById("pushFront");
const pushEndButton = document.getElementById("pushEnd");
const popFrontButton = document.getElementById("popFront");
const popEndButton = document.getElementById("popEnd");

pushFrontButton.chest = 5;
console.log(pushFrontButton.chest);





/*ACTIONS*/

let drawLoc = {x:20,y:20};
let clearLoc = {x:15,y:15};

function pushEndBox()
{
    canvasContext.fillRect(drawLoc.x,drawLoc.y,200,200);
    canvasContext.strokeRect(drawLoc.x,drawLoc.y,200,200);
    drawLoc.x += 220;
    clearLoc.x += 220;
}

function popEndBox()
{
    canvasContext.clearRect(clearLoc.x,clearLoc.y,220,220);
    drawLoc.x -= 220;
    clearLoc.x -= 220;
}






//const strokeRectArr = [20,20,200,200];


//canvasContext.clearRect(30,30,10,10);



/*
canvasContext.fillRect: draws a filled rectangle on canvas.
First two parameters are the x/y coordinates the drawing starts from.
Second two parameters, are the x/y lengths the rectangle will be.

canvasContext.fillRect(20,20,200,200);

NOTE: Must set canvasContext.fillStyle to something prior to drawing rectangles.
This sets the color of the filling of the box
*/

/*
canvasContext.strokeRect: draws an empty rectangle on canvas.
First two parameters are the x/y coordinates the drawing starts from.
Second two parameters, are the x/y lengths the rectangle will be.

canvasContext.strokeRect(20,20,200,200);

NOTES:
You are meant to define the borders of this empty rectangle.
canvasContext.lineWidth for how big the borders are meant to be.
canvasContext.strokeStyle for the style of lines. This often is color.
*/

/*
canvasContext.clearRect: erases drawn rectangles.
This includes both filled rectangles and stroked rectangles.
First two parameters are the x/y coordinates the drawing starts from.
Second two parameters, are the x/y lengths the rectangle will be.
*/
