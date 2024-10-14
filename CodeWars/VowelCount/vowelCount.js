function getCount(str) {
    let arr = str.split('').filter((value) => value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u');
    return arr.length;
}

