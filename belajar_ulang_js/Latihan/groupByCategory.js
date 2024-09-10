function groupByCategory(arr){

    const newObj = {};

    for(let i = 0; i < arr.length; i++){

       if(!newObj[arr[i].category]){
        newObj[arr[i].category] = [];

       
       }

       newObj[arr[i].category].push(arr[i])
    }
    return newObj;
}

const items = [
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "Cucumber", category: "Vegetable" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Orange", category: "Fruit" }
]

console.log(groupByCategory(items));