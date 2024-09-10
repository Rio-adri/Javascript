const reverseString = (s)=>{
    const arr = Array.from(s);
    arr.reverse();
    return arr.join('');
    
}

console.log(reverseString('hai'));