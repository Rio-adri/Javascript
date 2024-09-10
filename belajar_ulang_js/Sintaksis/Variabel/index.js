// variabel adalah wadah untuk menampung nilai. kita dapat membuat variabel dengan mengunakan dua keyword diawal sebelum 
// membuat nama variabel yaitu dengan const dan let. const membuat variabel tidak bisa di inisiasi atau diubah lagi nilainya. Sedangkan
// dengan let kita bisa menginisiasi ulang nilai nya.

// contoh sederhana membuat variabel : 
const namaAku = 'rio';

// mengetes mengubah nilai let

let nama = 'Rio';

console.log(' sebelum diubah : ', nama);

nama = 'adit';

console.log('nama setelah diubah',nama);

// mengetes mengubah nilai const

const namaKelas = '2MIO';

console.log('sebelum diubah', namaKelas);

// namaKelas = '4mio';

console.log('setelah diubah', namaKelas);

// output : error

// aturan penamaan variabel : 
// 1. Variabel tidak boleh sama dengan nama variabel yang sudah dideklarasikan sebelumnya
// 2. Penamaan Variabel terdiri atas huruf,angka,undrscore,dan penggabungan semuanya
// 3. variabel tidak boleh diawali dengan angka

// contoh : 
const nama1 = 'Rio';
const _namaKu1 = 'Adrian';
const namaSaya_2 = ' acumalaka' ;

console.log(nama1)
console.log(_namaKu1);
console.log(namaSaya_2);
