const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle ="orchid";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y);
    if(!painting){
        ctx.beginPath(); //시작점은 mouse가 있는 곳.
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke(); // 현재의 stroke style로 그림을 그림.
        //ctx.closePath()
    }
}

function onMouseDown(event){
    painting = true;
}

// function onMouseUp(event){
//     // painting = false;
//     stopPainting()
// }

function handleColorClick (event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; //overide해서 색 바뀜
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

//console.log(Array.from(colors));