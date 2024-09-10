// string operator menerima dua operand dengan satu operand adalah string dan string ataupun satunya bukan string.
// operator ini digunakan untuk menggabungkan dua string, menggabungkan string dengan tipe data lain.

// contoh : 

const umur = 19;
const greet = "hai namasaya rio umur saya " + umur;
console.log(greet);

const angka = '22';
const tes = angka + 2;
console.log(tes)

// outputnya 22 itu karena 2 di akhir berubah menjadi string karen aoperator + 
// begitupun jika dibalik

const tes2 = 2 + angka;
console.log(tes2);

console.log(10%3);