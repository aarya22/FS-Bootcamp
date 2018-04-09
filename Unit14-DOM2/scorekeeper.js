var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var reset = document.getElementById("reset")
var p1Disp = document.getElementById("p1Disp")
var p2Disp = document.getElementById("p2Disp")
var input = document.querySelector("input")
var numDisp = document.getElementById("num")
var num = 5;
var p1score = 0;
var p2score = 0;
var gameOver = false;

p1.addEventListener("click", function(){
    if (!gameOver) {
        if (p1score < num) {
            p1score++;
        }
        if (p1score === num) {
            p1Disp.style.color = "green";
            gameOver = true;
        }
    }
    p1Disp.textContent = p1score;
})

p2.addEventListener("click", function(){
    if(!gameOver) {
        if (p2score < num) {
            p2score++;
        } 
        if (p2score === num) {
            p2Disp.style.color = "green";
        }
    }
    p2Disp.textContent = p2score;
})

reset.addEventListener("click", function(){
    reset();
})

function reset() {
    p1score = 0;
    p1Disp.textContent = 0;
    p1Disp.style.color = "black";
    p2score = 0;
    p2Disp.textContent = 0;
    p2Disp.style.color = "black";
    gameOver = false;
}

input.addEventListener("change", function(){
    numDisp.textContent = input.value;
    num = Number(input.value);
    reset();
})

