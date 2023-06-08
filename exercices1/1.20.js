function gcd(a, b) {
    console.log(a, b);
    return b === 0 ? a : gcd(b, a % b);
}

//application order
gcd(206, 40);
gcd(40, 6); //1
gcd(6, 4); //2
gcd(4, 2); //3
gcd(2, 0); //4

//normal order
gcd(206, 40);
gcd(40, 206 % 40); //+1
gcd(206 % 40, 40 % (206 % 40)); // +2
gcd(40 % (206 % 40), (206 % 40) % (40 % (206 % 40))); // +4
gcd(
    (206 % 40) % (40 % (206 % 40)),
    (40 % (206 % 40)) % ((206 % 40) % (40 % (206 % 40)))
); // +7

//remonté +4 donc 18
