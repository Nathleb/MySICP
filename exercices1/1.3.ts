function sumSquareTwoBiggestNumber(num1: number, num2: number, num3: number) {
    let sum: number = num1 + num2 + num3;
    let max1: number = Math.max(num1, num2, num3);
    let max2: number = sum - max1 - Math.min(num1, num2, num3);

    return square(max1) + square(max2);
}


function sumSquareTwoBiggestNumbers(...numbers: Array<number>) {
    if (numbers.length == 0)
        return 0;
    if (numbers.length == 1)
        return square(numbers[0]);
    numbers.sort((b, a) => b - a);
    return square(numbers[0]) + square(numbers[1]);
}

console.log(sumSquareTwoBiggestNumbers(1, 2, 3));