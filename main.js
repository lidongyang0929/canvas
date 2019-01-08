var canvas = document.getElementById('canvas')

autoSetCanvasSize(canvas)

var ctx = canvas.getContext('2d')

var mouseDown = false
var lastPoint = {x: undefined, y: undefined}
canvas.onmousedown = function(aaa){
    mouseDown = true
    var x = aaa.clientX
    var y = aaa.clientY
    if(eraserEnabled){
      ctx.clearRect(x-2,y-4,4,4)
    }else{
    lastPoint = {x: x,y: y}
    }
}
//var newPoint = {x: undefined, y: undefined}
canvas.onmousemove = function(aaa){
    var x = aaa.clientX
    var y = aaa.clientY
    if(mouseDown){
        if(eraserEnabled){
            ctx.clearRect(x-2,y-2,4,4)
        }else{
        var newPoint = {x: x,y: y}
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint
        }
    }
}
canvas.onmouseup = function(aaa){
    mouseDown = false;
}
var eraserEnabled = false
eraser.onclick = function(){
    eraserEnabled = true
    actions.className='actions x'
}
brush.onclick = function(){
    eraserEnabled = false
    actions.className = 'actions'
}






function autoSetCanvasSize(){
    setCanvasSize()
    window.onresize = function(){
    setCanvasSize ()}
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
     }
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.lineWidth =4
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()   
}


