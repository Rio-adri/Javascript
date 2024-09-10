// function expression adalah function yang disimpan di dalam sebuah variabel sehingga variabel tersebut otomatis menjadi identifier bagi function itu
// perbedaan lainnya adalah, function expression tidak memiliki fitur hoisting, yang artinya
// kita tidak bisa memanggil fungsi tersebut sebelum mendeklarasikannya. Jadi kita harus mendeklarasikan fungsinya dan 
// menjadikannya sebagai function expression atau menyimpannya di dalam sebuah variabel, lalu baru memanggilnya
// Kita tidak perlu menambah identifier sebelum parentheses nya karena  variabel yang berfungsi menyimpan fungsi 
// adalah identifiernya


const greeting = function(name){
    const word = 'Hai nama saya ' + name;
    return word;
}

console.log(greeting('rio'));

// FIRST CLASS CITIZEN

// First class citizen artinya fungsi dapat diperlakukan layaknya variabel.
// kita dapat menjadikan fungsi sebagai nilai dari suatu variabel, menjadi argumen untuk parameter darifungsi lain,
// menjadi nilai kembalian atau return value dari fungsi lain dan dapat mengembalikan nilai fungsi dari suatu fungsi lain.
// selain itu function dapat disimpan dalam elemen array dan object literal

// contoh kode : 
function perkalian (a,b){
    return a * b;
}

function hitung(operasi,angka1,angka2){
    const hasil = operasi(angka1,angka2);
    return hasil;
}

const result = hitung(perkalian,5,4);
console.log(result);

// dapat kita lihat bahwa kita membuat fungsi perkalian yang digunakan sebagai argumen dari parameter operasi
// di dalam fungsi perkalian memiliki paramter a dan b yang nantinya akan diisi angka dari argumen
// lalu fuungsi hitung memiliki parameter operasi,angka1,dan angka2. Dimana parameter operasi menyimpan nilai sebuah fungsi perkalian yang digunakan untuk
// mengkalkulasikan parameter angka1 dan angka2 yang merupakan sebuah angka.
// angka tersebut masuk ke fungsi perkalian dan dikembalikan hasilnya lalu disimpan di variabel hasil, 
// variabel hasiltersebut dikembalikan oleh fungsi hitung
// lalu kita memanggil fungsi hitung tetapi menjadi sebuah nilai dari variabel result yang akhirnya variabel result yang memiliki nilai hasil 
// atau kembalian dari fuungsi hitung


function multiplier(x){
    return function (num){
        return x * num;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(11));
console.log(triple(11));