// selain dapat menerima nilai, function juga dapat mengeluarkan nilai atau mengembalikan nilai.
// cara mengembalikan nilai dalam function adalah dengan menggunakan keyword return dan diteruskan dengan nilai yang ingin dikembalikan yang disebut dengan return value.

function tambah(a,b){
    const hasil = a + b;
    return hasil;
}

console.log(tambah(1,2));

// Jika didalam function body program sudah membaca keyword return tersebut, maka functionnya dianggap sudh selesai dan tidak dijalankan lagi.
// artinya, jika ada baris kode lagi yang terletah setelah keyword keyword return dan return value, maka baris kode tersebut tidk akan dibaca
// contoh : 

function greeting (){
    return "hello World";
    console.log('aku gak akan dibaca');
}

console.log(greeting());
// maka output yang muncul hanya hello world, tidak dengan console.log nya