// string adalah tipe data yang berisi teks. string bisa diawali dan diakhiri dengan petik duaa ( ""), petik satu('') atau pun backticks (``);
// dengan petik dua

// "Ini merupakan string dengan petik dua"
// 'Ini Merupakan string dengan petik satu'
// `ini merupakan string dengan backticks`

// membuat baris baru dengan petik dua dan petik satu harus menggunakan kata kunci '\n',berikut contohnya : 
console.log("baris1 \n baris2");
console.log('baris1\nbaris2');

// namun dengan backticks, kamu bisa membuat barisnya terpisah dengan enter

console.log(`Baris 1
dan baris 2`);

// dengan backtick kita dapat menyatukan ekspression javascript dengan kata kunci ${expressionnya};
// contoh : 

const nama = "Rio ";

console.log(` Hai ,  Nama saya adalah ${nama}`)