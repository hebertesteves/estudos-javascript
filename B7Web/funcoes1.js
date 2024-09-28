function addSquares(a, b) {
    const square = x => x * x;

    return square(a) + square(b);
}

console.log(addSquares(4, 3));