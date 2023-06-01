/**
 * A function f is defined by the rules f(n) = n if n < 3 and f(n) = f(n – 1) + 2f(n – 2) + 3f(n – 3)
if n ≥ 3. Write a JavaScript function that computes f by means of a recursive process. Write
a function that computes f by means of an iterative process.
 */

function f_recursive(n) {
    if (n < 3)
        return n;
    return f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3);
}

function f_iterative(n) {
    if (n < 3)
        return n;

    let n1 = 0;
    let n2 = 1;
    let n3 = 2;
    let n4;

    for (let i = 2; i < n; i++) {
        n4 = n3 + 2 * n2 + 3 * n1;
        n1 = n2;
        n2 = n3;
        n3 = n4;
    }
    return n4;
}

for (let j = 0; j < 10; j++) {
    console.log(f_recursive(j) == f_iterative(j));
}
