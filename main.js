canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
RoverWidth = 100;
RoverHeight = 75;
RoverX = 200;
RoverY = 200;

var bgi = "mars.jpg"
var rvi = "rover.png"

function add()
{
    bg = new Image();
    bg.onload = uploadbg;
    bg.src = bgi;
    rv = new Image();
    rv.onload = uploadrv;
    rv.src = rvi;
}


function uploadbg()
{
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function uploadrv()
{
    ctx.drawImage(rv, RoverX, RoverY, RoverWidth, RoverHeight);
}


window.addEventListener("keydown",my_keydown)
function my_keydown(e) 
{
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed == "37"){
        left();
    }

    if(KeyPressed == "38"){
        up();
    }

    if(KeyPressed == "39"){
        right();
    }

    if(KeyPressed == "40"){
        bottom();
    }

}
function left() {

    if(RoverX >= 0)
    {
        RoverX = RoverX - 10;
        uploadbg();
        uploadrv();
    }

}

function right() {
    if(RoverX <= 500) 
    {
        RoverX = RoverX + 10;
        uploadbg();
        uploadrv();
    }
}

function up() {
    if(RoverY >= 0)
    {
        RoverY = RoverY - 10;
        uploadbg();
        uploadrv();
    }
}

function bottom() {
    if(RoverY <= 325)
    {
        RoverY = RoverY + 10;
        uploadbg();
        uploadrv();
    }
}
    




