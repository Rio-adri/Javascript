// spread operator di javascript ditandai dengan tiga titik (...) sebelum nama object yang ingin digabungkan. Kita dapat menggabungkan dua object dan menyalin object
// dengan menggunakan spread operator ini
// berikut contoh penggunaan spread operator : 

const myObj = { name : 'rio', age : 19};
const addressObj = {address : 'Jl.Merdeka Muba'};
const gabungkan = {...myObj, ...addressObj};
console.log(gabungkan);

// maka object myObj dan object addressObj akan digabungkan jadi satu dan dsimpan ke dalam object gabungkan.
// Kita juga dapat menggunakan spreadoperator untuk menyalin object lain seperti berikut : 

const salinObj = {...gabungkan};
console.log(salinObj);

// maka kita berhasil menyalin semua properti objeck gabungkan dan dimasukkan ke dalam object salinObj


// selain di object, kita juga bisa menerapkan spread operator pada array, penggunaannya sama, yang membedakan hanya kurungnya saja
// kita juga dapat mengeluarkan elemen array dari suatu array menggunakan spread operator
// contoh : 
const arr = [1,2,3,...[1,2,3]]
console.log(arr);// output : [1,2,3,1,2,3]


// menggabungkan
const myArr = [1,2,3];
const secondArr = [4,5,6];

const gabungArr = [...myArr, ...secondArr];
console.log(gabungArr);
// kita berhasil menggabungkan elemen dari dua array menjadi satu array yang berbeda

// kita juga dapat melakukan penyalinan seperti sebelumnya

const salinArr = [...gabungArr];
console.log(salinArr);

