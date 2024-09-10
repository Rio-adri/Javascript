function countOddNumbers(arr){
    let sum = 0;
    for (let i = 0 ; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            sum++;
        }
    }

    return sum
}

console.log(countOddNumbers([1,2,3,4,5]));