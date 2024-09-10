function flattenArray(arr){
    let newArr;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i][i]) == typeof(arr)){
            newArr = [...arr[i][i]];
        }
    }
    const lastArr = [...arr,...newArr];

    return lastArr

}

const nestedArr = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nestedArr));  // Output: [1, 2, 3, 4, 5, 6, 7]
