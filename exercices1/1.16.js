function fast_exp(b, n) {
  return fast_exp_iter(b, n, 1);
}

function fast_exp_iter(b, n, a) {
  return n == 0
    ? a
    : n % 2 == 0
    ? fast_exp_iter(b * b, n / 2, a)
    : fast_exp_iter(b, n - 1, a * b);
}
