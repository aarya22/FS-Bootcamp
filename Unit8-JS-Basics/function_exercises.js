function isEven(num) {
    if (num%2 == 0) {
        return true
    }
    return false
}

function factorial(num) {
    prod = 1
    n = 2
    while (n <= num) {
        prod = n * prod
        n++
    }

    return prod
}

function kebabToSnake(s) {
    return s.replace(/-/g, "_")
}