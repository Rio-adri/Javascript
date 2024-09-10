// tipe data number adalah semua data yang bersifat angka baik bilangan bulat ataupun pecahan
// penulisannya, kita dapat menulis angkanya secara langsung tanpa tanda khusus

const angka = 1;

// lalu ada infinity dan NaN

// infinity adalah dimana ketika kita melakukan operasi dengan angka yang hasil nya tidak terdefinisi
// misalnya membagi angka dngan 0

const bagi = 50 / 0;

console.log(bagi);
// output : Infinity


// NaN adalah ketika kita mengkonversi string menjadi tipe number
// Number() adalah fungsi yang digunakan untuk mengkonversi tipe data lain menjadi tipe data number
const hasil = Number('dicoding');
console.log(hasil);
// output : NaN