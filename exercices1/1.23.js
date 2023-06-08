function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
        ? test_divisor
        : find_divisor(n, next(test_divisor));
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function square(n) {
    return n * n;
}

function timed_prime_test(n) {
    return start_prime_test(n, new Date());
}

function start_prime_test(n, start_time) {
    return is_prime(n) ? report_prime(n, new Date() - start_time) : false;
}

function report_prime(n, elapsed_time) {
    console.log(" *** ");
    console.log(n + " time needed " + elapsed_time);
    return true;
}

function search_for_primes(min, toFind) {
    min = min % 2 === 0 ? min + 1 : min;
    return toFind === 0
        ? true
        : timed_prime_test(min)
        ? search_for_primes(min + 2, toFind - 1)
        : search_for_primes(min + 2, toFind);
}

function next(input) {
    return input === 2 ? 3 : input + 2;
}

search_for_primes(10000000, 3);
