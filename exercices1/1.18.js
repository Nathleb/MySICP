function times_peasant(a, b) {
  return times_peasant_iter(a, b, 0);
}

function times_peasant_iter(a, b, acc) {
  return a == 1
    ? acc + b
    : a % 2 == 0
    ? times_peasant_iter(halve(a), double(b), acc)
    : times_peasant_iter(halve(a - 1), double(b), acc + b);
}
