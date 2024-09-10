// pada suatu function, kita kadang butuh banyak argumen .jika banyak argumen, otomatis kita perlu banyak parameter. parameter tidak menjadi masalah ketika hanya sedikit seperti satu atau dua paramter.
// Namun, ini akan menjadi masalah ketika kita mmerlukan banyak paramater. tentu jika kita menulis semua parameters tersebut secara manual
// hal ini tidak sesuai dengan konsep clean code. maka hadirlah rest parameter. Rest Parameter berfungsi untuk menangkap argumen yang banyak dalam suatu parameters dengan menambahkan tiga titik(...)
// sebelum parameter. artinya kita hanya perlu menuliskan satu nama parameter yang dapat menangkap semua argumen tersebut lalu nilainya akan disimpan dalam bentuk array
// berikut contoh penggunaannya : 

function manyNumbers(...satuParameter){
    return satuParameter;
}

console.log(manyNumbers(1,2,3,4,5));

// maka outputnya, angka angka tersebut akan disimpan dalam satu array
// jika ada parameter lain sebelum parameter rest operator, maka nilai dari parameter tersebut tidak dimasukkan ke dalam array rest operator

function banyakAngka(paramater1, ...parameter2){
    console.log(paramater1);
    console.log(parameter2);
}

banyakAngka(1,4,5,6,7,8);
// maka angka pertama akan masuk ke parameter 1 dan angka tersebut tidak masuk ke dalam array parameter 2

// karena rest operator disimpan dalam parameter dan parameter tersebut berbentuk array, maka semua method yang dapat digunakan
// pada array dapat juga digunakan oleh parameter tersebut

function nama(...banyakNama){
    console.log(banyakNama.length);
    banyakNama.push('hai');
    console.log(banyakNama)
}

nama('rio' ,'aji', 'adit');

// selain di dalam fungsi, rest parameter juga dapat digunakan pada destructuring array untuk menangkap seluruh sisa array yang ada
// contoh : 
const oriArr = [1,2,3,4,5,6,7,8,9,10];
const [satu,dua,...sisanya] = oriArr;

console.log(satu);
console.log(dua);
console.log(sisanya);

// seperti sebelumnya, variabel sisanya akan bertipe array, dan data yang berhasil diambil akan disimpan di dalam array tersebut

