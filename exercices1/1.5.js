function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

//normal-order evaluation would lead to program runnin without error and test returnng 0 as p() is never evaluated
//applicative-order-evaluation would lead to an error as p() evaluation is an infinite loop