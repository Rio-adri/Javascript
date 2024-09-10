// set adalah struktur data dalam javascript yang unil. Set tidak mempunyai key dan hanya mempunyai value, mirip seperti array tapi dengan penulisan yang berbeda.
// Keunikan set adalah set tidak menyimpan data yang duplikat, artinya jika ada dua data yang sama, maka set hanya akan menyimpan satu saja. Berikut cara membuat set

// Kita bisa membuat set dengan object constructur seperti ini : 
const mySet = new Set();

// atau kita bisa langsung mengisi nilainya seperti ini : 

const newSet = new Set([1,2,3,4,5]);
console.log(newSet);
// 1. menambahkan nilai set setelah inisiasi

// kita dapat menambahkan nilai di dalam set setelah inisiasi dengan menggunakan method add().Dimana add 
// memiliki satu parameter yang menerima nilai yang ingin disimpan ke dalam set

newSet.add(6);
console.log(newSet);

// jika kita menambahkan nilai yang sama ke dalam set, maka nilai tersebut tidak akan dimasukkan karena didalam set sudah ada dan
// set tidak menyimpan nilai yang duplikat

newSet.add(1);
newSet.add(1);
console.log(newSet);

// 2. Mengakses nilai pada Set
// mengakses nilai pada set dalam dilakukan dengan menggunkan perulangan(looping) seperti for of dan forEach

// for of : 
for(const number of newSet){
    console.log(number);
}
console.log('\n');

// forEach
// forEach adalah method, jadi kita harus menggabungkan methodnya dengan set yang ingin kita loopingkan melalui titik(.)
newSet.forEach((value)=>console.log(value));

// 3. Menghapus nilai pada set
// untuk menghapus nilai pada set, kita dapat menggunakan method .delete(value). di dalam parentheses diisi dengan nilai yang ingin dihapus

newSet.delete(1);
console.log(newSet);