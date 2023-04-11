

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
canvas.height = window.innerHeight;


const pushFrontButton = document.getElementById("pushFrontButton");
const pushEndButton = document.getElementById("pushEndButton");
const popFrontButton = document.getElementById("popFrontButton");
const popEndButton = document.getElementById("popEndButton");

const pushFrontAction = document.getElementById("pushFrontAction");
//console.log(pushFrontAction.pushFrontButton);
class Node
{
    constructor(pData)
    {
        this.data = pData || 0;
        this.nextNode = null;
    }
}
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = this.head;
        this.count = 0;
    }
    pushFront(pData)
    {
        if(this.head == null)
        {
            this.newNode = new Node(pData);
            this.head = this.newNode;
            this.tail = this.newNode;
            this.count++;
        }
        else if(this.head != null && this.tail == this.head)
        {
            this.newNode = new Node(pData);
            this.newNode.nextNode = this.head;
            this.head = this.newNode;
            this.count++;
        }
        else if((this.head != null && this.tail != null) && this.head.nextNode == this.tail)
        {
            this.newNode = new Node(pData);
            this.newNode.nextNode = this.head;
            this.head = this.newNode;
            this.count++;
        }
        else
        {
            this.newNode = new Node(pData);
            this.newNode.nextNode = this.head;
            this.head = this.newNode;
            this.count++;
        }
    }
    pushEnd(pData)
    {
        if(this.head==null)
        {
            this.newNode = new Node(pData);
            this.head = this.newNode;
            this.tail = this.newNode;
            this.count++;
        }
        else if(this.head != null && this.tail == this.head)
        {
            this.newNode = new Node(pData);
            this.tail.nextNode = this.newNode;
            this.tail = this.newNode;
            this.count++;
            
        }
        else if((this.head != null && this.tail != null) && this.head.nextNode == this.tail)
        {
            this.newNode = new Node(pData);
            this.tail.nextNode = this.newNode;
            this.tail = this.newNode;
            this.count++;
        }
        else
        {
            this.newNode = new Node(pData);
            this.tail.nextNode = this.newNode;
            this.tail = this.newNode;
            this.count++;
        }
    }
    popFront(pData)
    {

    }
    popEnd(pData)
    {

    }

    displayListV1()
    {
        this.temp = this.head;
        for(let i = 0; i < this.count; i++)
        {
            console.log(this.temp.data);
            this.temp = this.temp.nextNode;
        }
    }
}

function drawList(providedList)
{
    let drawBoxMover =  -225;

    let drawLocs = 
    {
        drawBoxLoc: {x:20,y:20},
        drawTextLoc: {x:120,y:150},
    };

    for(let i = 0; i < providedList.count; i++)
    {
        drawBoxMover+=225;
        providedList.temp = providedList.head;
        
        for(let j = 0; j <= i; j++)
        {
            
            /*BOX*/
            canvasContext.fillStyle = fillStyleArr[2];
            canvasContext.lineWidth = 5;
            canvasContext.strokeStyle = 'black'
            canvasContext.fillRect(drawLocs.drawBoxLoc.x + drawBoxMover,drawLocs.drawBoxLoc.y,200,200);
            canvasContext.strokeRect(drawLocs.drawBoxLoc.x + drawBoxMover,drawLocs.drawBoxLoc.y,200,200);

            /*TEXT*/
            canvasContext.font = "100px Comic Sans MS";
            canvasContext.textAlign = "center";
            canvasContext.fillStyle = 'black';
            canvasContext.fillText(providedList.temp.data, drawLocs.drawTextLoc.x  + drawBoxMover, drawLocs.drawTextLoc.y);

            /*----------------------------*/
            providedList.temp = providedList.temp.nextNode;
        }
    }

}
let thisList = new LinkedList();
pushFrontButton.onclick = function(){drawList(thisList)};

function clearCanvas()
{
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
}


thisList.pushEnd(4);
thisList.pushEnd(5);
thisList.pushEnd(6);


//window.setTimeout(function(){drawList(thisList)}, 2000);
//clearCanvas();
//canvasContext.clearRect(30,30,10,10);


//

/*


*/
/*


function pushEndBox()
{
    
    drawLoc.x += 220;
    clearLoc.x += 220;
}

function popEndBox()
{
    canvasContext.clearRect(clearLoc.x,clearLoc.y,220,220);
    drawLoc.x -= 220;
    clearLoc.x -= 220;
}
*/


// onclick="pushEndBox()"
// onclick="popEndBox()"



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
