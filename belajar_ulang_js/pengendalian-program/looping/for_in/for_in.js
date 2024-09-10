// for in adalah perulangan yang digunakan untuk mengiterasi property atau key dari object, jadi array ini hanya digunakan di object
// berikut adalah penggunaan for in : 

const obj = {name: 'rio' , age : 19 };

for(let getProperty in obj){
    console.log(getProperty);
}

// output  : name dan juga age