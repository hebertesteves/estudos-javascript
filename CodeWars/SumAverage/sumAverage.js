const sumAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].reduce((value, cont) => value + cont, 0) / arr[i].length;
    }
    let result = Math.floor(sum);
    return result;
}
