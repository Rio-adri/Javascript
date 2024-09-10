// mengubah nilai ke string dari tipe data lain dapat menggunakan dua cara yaitu fungsi String('nilainya'); dan method 'variabek-yang-menyimpan-nilai'.toString();

// berikut contoh pengunaannya : 

const angka = 123;
const boolean = true;

const hasilKonversi1 = String(angka);
const hasilKonversi2 = boolean.toString();

console.log(hasilKonversi1);
console.log(hasilKonversi2);
// output : 123 dan "true"

// typeof() untuk mengidentifikasi tipe data 
console.log(typeof(hasilKonversi1));
console.log(typeof(hasilKonversi2));

// output : string

// method toString() mengembalikan niilai string berdasarkan referensinya