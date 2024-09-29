function capitalize(s,arr){
    let vet = s.split('');
    for (let i of arr) {
        if (i >= 0 && i < vet.length) vet[i] = vet[i].toUpperCase();
    }
    return vet.join('');
};

