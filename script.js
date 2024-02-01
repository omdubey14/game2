var screen = document.querySelectorAll(".screen")
var strtbtn = document.querySelector("button")
var box = document.querySelectorAll(".box")
var playground = document.querySelector(".playground")
strtbtn.addEventListener("click",function(){
  screen[1].style.transform = "translateY(-100%)"
})
box.forEach(function(elm){
     elm.addEventListener("click",function(){
     
    screen[2].style.transform = "translateY(-200%)"
    selected = elm.childNodes[1].getAttribute("src")
    var newImg = document.createElement("img") 
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
    newImg.setAttribute("src",selected)
    newImg.style.left = x+"%"
    newImg.style.top = y+"%"
    newImg.style.rotate = rot+"%"
    playground.appendChild(newImg)
  })
})
