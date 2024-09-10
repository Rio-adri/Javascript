// function bersifat sama seperti variabel, kita bisa mendapatkan nilai didalamnya hanya dengan memanggil namanya
// pendeklarasian function dimulai dengan menulis kata atau keyword function. Lalu menulis nama dari function nya atau disebut dengan identifier. setelah itu baru kita buat function bodynya.
// berikut contoh penulisan function : 

function greetWorld() {
 console.log("Hello World");
}

// diawali dengan kata function, lalu identifier nya yaitu greetWorld() dan function bodynya yang diapit oleh kurung kurawal

// cara memanggil functionnya dengan cara cukup memanggil nama nya atau identifier nya 
greetWorld();

// ketike dipanggil, kode didalam function body akan berjalan dan dieksekusi sehingga munculah output hello world

// lalu didalam identifier yang diapit oleh tanda kurung, kita dapat memasukkan nilai yang bisa dipakai didalam function body.
// nilai tersebut kita misalkan dengan sesuatu yang disebut dengan parameter. Parameter anggap saja sebagai pemisalan untuk nilai 
// yang akan kita masukkan ke dalam function nantinya saat dipanggil

// contoh : 

function greeting(pemisalan){
    console.log("hai nama saya " + pemisalan);
}

greeting('Rio');

// nilai yang kita masukkan disebut dengan argumen, dan pemisalan yang menerima nilai tersebut adalah parameter. 
// penulisan nilai sebagai argumen sama harus disesuaikan dengan tipe datanya, jika yang ingin kita input adalah string,maka kita harus menambahkan kutip.
// jadi kita bisa meemanggil function tersu menerus sehingga tidak menyebabkan kita menulis kode yang sama berulang ulang

// didalam javascript, ada fitur hoisting, yaitu dimana kita dapat memanggil function sebelum pendeklarasian functionnya 

// contoh : 

tambah(1, 2);

function tambah(a,b){
    const hasil = a + b;
    console.log(hasil);
}
// kita dapat menambahkan banyak argumen dan parameter asal dipisah dengan koma

