function findOutlier(integers){
    let evenNumbers = integers.filter(number => number % 2 === 0);
    let oddNumbers = integers.filter(number => number % 2 != 0);
    return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0];
}
