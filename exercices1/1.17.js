function fast_times(a, b) {
  return fast_times_iter(a, b, 0);
}
function fast_times_iter(a, b, acc) {
  return b == 0
    ? acc
    : b % 2 == 0
    ? fast_times_iter(double(a), halve(b), acc)
    : fast_times_iter(a, b - 1, acc + a);
}
function double(a) {
  return a + a;
}

function halve(a) {
  return a / 2;
}
