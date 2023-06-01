function cube(x) {
    return x * x * x;
}
function p(x) {
    console.log("tick");
    return 3 * x - 4 * cube(x);
}
function sine(angle) {
    return !(Math.abs(angle) > 0.1) ? angle : p(sine(angle / 3));
}

sine(12.15);

// 5 fois
// O(log₃(a))
