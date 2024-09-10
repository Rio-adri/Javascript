// conditional flow adalah eksekusi kode yang ditentukan oleh suatu kondisi tertentu. Apakah suatu code akan di eksekusi atau tidak jika suatu kondisi terpenuhi atau dilewatkan saja.
// Kode dalam pemrograman tidak seelalu dieksekusi secara sequential karena adanya conditional flow

// conditional flow terbagi menjadi dua, yaitu if statement dan switch case

// 1. if statement
// if statement memungkinkan suatu kode program akan dieksekusi atau tidak berdasarkan suatu kondisi. jika kondisinya terpenhi, maka kode akan dieksekusi
// namun jika kondisinya tidak terpenuhi, maka kode tidak akan dieksekusi

// penulisan if statement : 
// if(condition){
//      statement
// }

// contoh : 
const gajian = false;

console.log(`jalan di mall`)
// if(gajian == true){
//     console.log(`makan di mall`);
// }
// console.log('pulang');

// misalnya, kita ingin melakukan hal lain jika kondisi nya tidak terpenuhi, kita dapat menambahkannya dengan else setelah statement if 
// seperti berikut : 
if(gajian == true){
    console.log(`makan di mall`);
}
else{
    console.log(`beli jajan`);

}

console.log(`pulang`);

// jadi jika nilai variabel gajian adalah false atau kondisi nya tidak sesuai dengan if condition, maka kita akan beli jajan 

// jika kita ingin menambahkan banyak kondisi lain kita dapat menggunakan else if setelah statement if 
// berikut contohnya : 

const score = 59;

if(score >= 80){
    console.log(`selamat nilai kamu A`);
}
else if(score >= 70){
    console.log(`selamat nilai kamu B`);
}
else if(score >= 60){
    console.log(`Selamat nilai kamu C`);
}
else{
    console.log(`kamu tidak lulus`);
}
