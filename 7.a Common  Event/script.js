function printMousePos() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
    document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
    alert(printMousePos())
}