function multiples(m, n){
    let arr = [];
    for (let i = 1; i <= m; i++) {
      arr.push(n * i);
    }
    return arr;
}
