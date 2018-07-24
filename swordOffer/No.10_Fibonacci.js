// 1. recursion
function Fib1(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return Fib1(n - 1) + Fib1(n - 2);
} 

function Fib2(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    let accumulator = [0, 1];
    let FibN;
    for (let i = 2; i <= n; i++) {
        FibN = accumulator[0] + accumulator[1];
        accumulator[0] = accumulator[1];
        accumulator[1] = FibN;
    }
    return FibN;
}

// test
for (let i = 0; i < 10; i++) {
    console.log(Fib1(i));
    console.log(Fib1(i));
    console.log('--------');
}
