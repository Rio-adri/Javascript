// menulis arrow function sedikit berbeda dengan regular function pada umumnya. Arrow function disimpan dalam sebuah variabel yang
// menjadi identifier dari function tersebut. pada arrow function, kita tidak perlu menuliskan kata kunci function setelah membuat identifier.
// tetapi sebgai gantinya, kita menambahkan tanda panah seperti ini "=>" setelah parameter. setelah tanda panah, kita menuliskan function body seperti biasa : 

const tambah = (a,b)=>{
    return a + b;
}

console.log(tambah(2,4));

// kita bisa menyederhanakan lagi penggunaan arrow function seperti berikut : 
const kurang = (a,b)=> a-b;

console.log(kurang(2,4));

// kita bisa menuliskan kode pada function body tanpa menggunakan kurung kurawal dan tanpa mengguanakan return, itu karena fat arrow mengembalikan nilai.
// tetapi hanya berlaku untuk mengembalikan satu nilai saja. kemudian penghilangkan kurung kurawal hanya dilakukan jika kode ditulis hanya dalam satu baris saja.
