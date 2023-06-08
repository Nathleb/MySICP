function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
        ? test_divisor
        : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? square(expmod(base, exp / 2, m)) % m
        : (base * expmod(base, exp - 1, m)) % m;
}

function square(n) {
    return n * n;
}

console.log(smallest_divisor(199));
console.log(smallest_divisor(1999));
console.log(smallest_divisor(19999));
