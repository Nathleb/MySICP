function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : exp % 2 === 0
        ? square(expmod(base, exp / 2, m)) % m
        : (base * expmod(base, exp - 1, m)) % m;
}

function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + Math.floor(Math.random() * (n - 1)));
}

function fast_is_prime(n, times) {
    return times === 0
        ? true
        : fermat_test(n)
        ? fast_is_prime(n, times - 1)
        : false;
}

function square(n) {
    return n * n;
}

function timed_prime_test(n) {
    return start_prime_test(n, new Date());
}

function start_prime_test(n, start_time) {
    return fast_is_prime(n, n - 1)
        ? report_prime(n, new Date() - start_time)
        : false;
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

search_for_primes(100, 3);
