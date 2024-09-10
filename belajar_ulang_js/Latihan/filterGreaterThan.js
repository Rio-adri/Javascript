function filterGreatherThan(arr,n){
    const newArr = [];
    
  for(let i = 0; i < arr.length; i++){
    
    if(n < arr[i] ){
        newArr.push(arr[i]);;
    }
  }
  return newArr;
}
const arr = [1,2,3,4,5,10]
const hasil = filterGreatherThan(arr,2);
console.log(hasil);