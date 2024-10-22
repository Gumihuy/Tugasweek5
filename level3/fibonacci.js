function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciSeries(n) {
    let series = [];
    for (let i = 0; i <= n; i++) {
        series.push(fibonacci(i));
        console.log(`[ ${series.join(', ')} ]`);
    }
    return series;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
