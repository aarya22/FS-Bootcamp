var n = 7

var guess = prompt("Guess a number!")

if (guess == n) {
    alert("You guessed it!")
} else if (guess < n) {
    alert("Too low! Try again!")
} else {
    alert("Too high! Try again!")
}
