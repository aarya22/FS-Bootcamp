var button = document.querySelector("button")
var p = document.querySelector("p")
var clicked = false

button.addEventListener("click", function(){
    if (!clicked) {
        p.textContent = "Someone clicked the button"
    } else {
        p.textContent = "Nobody clicked the button"
    }
    clicked = !clicked;
})
