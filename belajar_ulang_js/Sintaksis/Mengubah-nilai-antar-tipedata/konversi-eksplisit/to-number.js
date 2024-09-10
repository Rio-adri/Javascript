// mengubah suatu tipe data ke angka dapat menggunakan fungsi Number(), parseInt(), dan juga fungsi parseFloat()


// Number() mengubah data dengan tipe data lain menjadi tipe data number
const angkaString = '123';
const boolean = true;

const konversi1 = Number(angkaString);
const konversi2 = Number(boolean);
// konversi boolean ke angka akan menghasilkan angka 1 jika true dan angka 0 jika false

console.log(konversi1);
console.log(konversi2);



// parseInt() mengubah tipe data lain menjadi bilangan bulat (int). parseInt() memeriksa karakter satu persatu 
// hingga ia menemukan karakter yang tidak bisa diubah ke number dan prosesnya akan berhenti di sana.

const strAngka = '123cm';
const strPx = '34px';

const parse1 = parseInt(strAngka);
const parse2 = parseInt(strPx);

console.log(parse1);
console.log(parse2);

// parseFloat() juga sama seperti parseInt(), namun bedanya hanya pada data yang diubah, yaitu menjadi bilangan decimal(float)

const strFloat1 = '23.55cm';
const strFloat2 = '34.65px';

const konversiFloat1 = parseFloat(strFloat1);
const konversiFloat2 = parseFloat(strFloat2);

console.log(konversiFloat1);
console.log(konversiFloat2);

