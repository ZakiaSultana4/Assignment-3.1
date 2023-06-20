const width =document.getElementById("width")

const heigth =document.getElementById("height")
width.innerHTML="Window inner width is : "+ window.innerWidth
heigth.innerHTML="Window inner height is : "+ window.innerHeight

  function openWindow() {
    myWindow = window.open("https://google.com")
  }
 function closeWindow() {
    myWindow.close()
 }