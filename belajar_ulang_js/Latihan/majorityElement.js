function findMajorityElement(arr){
    let candidate = null ;
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(count === 0){
            candidate = arr[i];
        }
        count += (arr[i] === candidate) ? 1 : -1;
    }

    count = 0 ;
    for (let i = 0; i < arr.length ; i++){
        if(arr[i]===candidate){
            count++;
        }
    }

    return (count > arr.length / 2) ? candidate  : null;
}

const arr = [3,3,3,3,3,4,5,6,6];
console.log(findMajorityElement(arr));