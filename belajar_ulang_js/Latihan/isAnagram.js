function isAnagram(s1,s2){
    const arr1 = Array.from(s1);
    const arr2 = Array.from(s2);

    arr1.sort();
    arr2.sort();

    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length ; i++){
        if(arr1[i] === arr2[i]){
            return true;
        }
        else{
            return false;
        }
    }
        
    }

    


console.log(isAnagram('HAI','IAHu'));

