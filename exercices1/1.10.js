function A(x, y) {
return y === 0
? 0
: x === 0
? 2 * y
: y === 1
? 2
: A(x - 1, A(x, y - 1));
}

A(1,10) = 1024
A(2, 4) = 65536
A(3, 3) = 65536


f(n) = 2*n
g(n) = 2**n
