function moveZeros(arr) {
    let arrZeros = [];
    arr.map((number) => {
        if (number === 0) {
            arrZeros = arr.splice(arr.indexOf(number), 1)
                .map(number => {
                    arr.push(number);
                });
        }
    });
     return  arr;
}
