function cubert_iter(guess, x) {
  let improvedGuess = improve(guess, x);
  return is_good_enough(guess, improvedGuess)
    ? guess
    : cubert_iter(improvedGuess, x);
}

function improve(guess, x) {
  return (x / square(guess) + 2 * guess) / 3;
}

function is_good_enough(guess, improvedGuess) {
  return (
    (guess * 100) / improvedGuess <= 100 && (guess * 100) / improvedGuess > 99.5
  );
}

function cubert(x) {
  return cubert_iter(1, x);
}

function square(x) {
  return x * x;
}

console.log(cubert(0.0000000000001));
console.log(cubert(1022234343543532));
console.log(cubert(0.3222));
console.log(cubert(0.00000232));
console.log(cubert(1000));
