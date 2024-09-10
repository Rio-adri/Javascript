// konversi implisit dapat terjadi dalam beberapa kondisi, contohnya aritmatika

const str = '124';
const hasil = 2 * str;

console.log(hasil);
// hasilnya akan jadi 248, javascript mengkonversikan string 124 menjadi angka dikarenakan adanya operator aritmatika *

// contoh lain : 

const umur = 19;
const greeting = 'Hai nama saya rio dengan umur ' + umur +  ' Tahun';

console.log(greeting);
// output : Hai nama saya rio dengan umur 19 Tahun

// outputnya berupa string. Javascript mengkonversikan variabel umur menjadi string karena adanya operatr + yang menggabungkan variabel dengan string;