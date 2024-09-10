// ternary operator atau conditional operator adalah operator yang menentukan suatu nilai berdasarkan kondisi teretntu. ternary
// terdiri dari satu kondisi dan memiliki 2 statement, satu mengembalikan nilai jika kondisinya true, satu mengembalikan nilai jika kondisinya false
// adapun penulisan ternary operator yaitu menggunakan tanda tanya (?) setelah kondisi, lalu statement 1 dan statement dua yang dispisahkan dengan
// tanda titik dua (:). Berikut cara  penulisan ternary operator: 
// condition ? statement1 : statement2

// contoh 1: 

const age = 19;
const sayaAdalah = (age > 17 ) ? `Orang Dewasa` : `Remaja`;

console.log(` Dari usia saya saat ini, saya adalah ${sayaAdalah}` );


// contoh 2  : 

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan diskon sebesar : ${discount * price}`);
