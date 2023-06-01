function sqrt_iter(guess, x) {
    let improvedGuess = improve(guess, x);
    return is_good_enough(guess, improvedGuess)
        ? guess
        : sqrt_iter(improvedGuess, x);
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}

function is_good_enough(guess, improvedGuess) {
    return (
        (guess * 100) / improvedGuess <= 100 &&
        (guess * 100) / improvedGuess > 99.5
    );
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

function square(x) {
    return x * x;
}

console.log(sqrt(0.0000000000001));
console.log(sqrt(1022234343543532));
console.log(sqrt(0.32323222));
console.log(sqrt(0.00000232));
console.log(sqrt(1000));
