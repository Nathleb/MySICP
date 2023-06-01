// a ← bq + aq + ap
// b' ← bp + aq

// a' <- (bp + aq)q + (bq + aq + ap)q + (bq + aq + ap)p
// b' ← (bp + aq)p + (bq + aq + ap)q

// a' <- (bpq + aq^2) + (bq^2 + aq^2 + apq) + (bpq + apq + ap^2)
// b' <- (bp^2 + apq) + (bq^2 + aq^2 + apq)

// a' <- 2*bpq + 2*aq^2 + bq^2 + 2*apq + ap^2
// b' <- bp^2 + 2 * apq + bq^2 + aq^2

// a' <- 2*(bpq + apq + aq**2) + bq**2 + ap**2
// b' <- bp**2 + 2 * apq + bq**2 + aq**2

// a' <- b*(2pq + q**2) + a*(2pq + q**2) + a*(p**2 + q**2)
// b' <- b*(p**2 + q**2) + a*(2pq + q**2)

function fib(n) {
  return fib_iter(1, 0, 0, 1, n);
}
function is_even(n) {
  return n % 2 == 0;
}
function fib_iter(a, b, p, q, count) {
  return count === 0
    ? b
    : is_even(count)
    ? fib_iter(a, b, p * p + q * q, 2 * p * q + q * q, count / 2)
    : fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1);
}
console.log("0 == " + fib(0));
console.log("1 == " + fib(1));
console.log("5 == " + fib(5));
console.log("55 == " + fib(10));
console.log("610 == " + fib(15));
console.log("6765 == " + fib(20));
console.log("12586269025 == " + fib(50));
