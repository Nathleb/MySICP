function plus(a, b) {
    console.log(a, b);
    return a === 0 ? b : inc(plus(dec(a), b));
}
function plus2(a, b) {
    console.log(a, b);
    return a === 0 ? b : plus(dec(a), inc(b));
}

function dec(a) {
    return --a;
}

function inc(a) {
    return ++a;
}


console.log("result " + plus(3, 5));
console.log("result " + plus2(3, 5));

Les deux recursives
