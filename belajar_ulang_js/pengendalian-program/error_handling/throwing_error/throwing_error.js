// NOTE : exception adlaah kondisi dimana kode program mengalamai tidak berjalan sebagaimana mestinya akibat kesalahan kode atau disebut error.
// ketika terjadi exception atau bisa dibilang error, javaScript otomatis akan menghentikan eksekusi normal dan mencari error handling yang kita buat


// memanggil constarctor error dengan syntax new Error
const error = new Error('Terjadi Error');
console.error(error);
// console.error adalah syntax khusus untuk memunculkan error pada console


// throwing error adalah cara kita membuat error kita sendiri, aar kita tidak bingung ketika kode tersebut mengalami error dan dapat di perbaiki dengan mudah
// penulisan error  : 
// throw <object-error>
// di dalam javascript ada bult-in-cunstructor untuk standar error, meliputi Error,SyntaxError,dll.

// contoh penulisan error : 


// kita perlu membuat error terjadi karena kita tidak ingin sesuatu yang tidak diingnakn terjadi
// misal ketika kita punya aplikasi toko, dan ada yang ingin membeli barang tetapi harga nya lebih kecil dari harga barang, 
// maka kode program kita akan error jika kita tidak menggunakan throwing error. Maka sari itu kita perlu throwing error ketika pembeli melakukan hal tersebut

// contoh throwing error: 
const price = 80;
const paid = 18;

if (paid < price){
    throw new Error(console.error(`pembayaran kurang, harga seharusnya ${price} bukan ${paid}`));
}

// untuk menangani error yang telah dibangkitkan kita dapat menggunakan catching error