// array adalah struktur data tipe object yang menyimpan data secara terurut, tidak seperti object literals yang tidak terurut.
// array dalam javascript dapat menyimpan banyak data dengan tipe data yang berbeda. tiap tiap data di dalam array disebut dengan element
// tiap tiap element dalam array dapat diakses dengan indeks. di dalam array Kita dapat menambahkan elemen di awal, diantara elemen, dan diakhir
// berikut adalah penulisan array : 
// 1. cara biasa
const myArr = [1,2, ,4,'hai',true];
console.log(myArr);// output : [1,2,empty, 4, 'hai',true]
// kita juga bisa mengosongkan elemen pada array seperti diatas

// 2. object constructor : 
const arr = new Array(3);

// kita mendefinisikan array baru menggunakan object constructor dan angka 3 di dalam nya berfungsi untuk menentukan length 
// atau panjang arraynya.

// 3. menggunakan sintaks Array.from();
// method baru yang digunakan untuk membuat array dan juga menyalin array

// membuat array menggunakan Array.from()
const newArr = Array.from('123');
console.log(newArr)// output : ['1','2','3']
console.log(typeof(newArr[0]))// output : object
// untuk membuat array, method ini hanya berguna untuk membuat array dengan tipe string, selain itu tidak bisa, array tetap akan kosong


// menyalin Array menggunakan Array.from()

const newMyArr = Array.from(newArr);
console.log(newMyArr);// output : ['1','2','3']


// MENGAKSES ELEMENT ARRAY
// Untuk mengakses elemtn array, kita bisa mengaksesnya dengan menggunakan indeks. indeks dimulai dari 0 dan 0 itu adalah posisi untuk elemen indeks pertama.
// cara mengakses elementnya adalah dengan menulisnama array lalu setelah menggunakan kurung siku. Didalam kurung siku tersebut kita tuliskan indeks arraynya.

// contoh  :

const numArray = [1,2,3,4];
console.log(numArray[0]);// output : 1


// MANIPULASI ARRAY
// 1. push() : adalah method untuk menambahkan elemen dibagian akhir di dalam suatu array
// contoh penggunaan: 
numArray.push(5);
numArray.push(6);
numArray.push(7);
numArray.push(8);

console.log(numArray);// output : [1,2,3,4,5,6,7,8]

// 2 delete untuk menghapus array 
// delete adalah syntax yang digunakan untuk menghapus data dalam array tanpa menghapus elemennya.Adapun penggunaannya adalah dengan
// mengetikkan kata delete laludiikuti dengan nama array dan indkes yang ingin dihapus : 
// contoh : 
delete numArray[1];
console.log(numArray);// output : [1,empty,3,4,5,6,7,8]

// 3. splice(param1,param2) : digunakan untuk menghapus data bserta elemnnya didalam array.
// splice menerima dua parameter . Parameter pertama adalah indeks elemen yang ingin dihapus, dan parameter kedua adalah berapa banyak elemen yang ingin dihapus
// jika elemen yang ingin dihapus 2 , maka satu elemen setelah elemen indeks yang dipilih juga akan dihapus
// contoh : 
numArray.splice(2,1);
console.log(numArray);// output : [1,empty,4,5,6,7,8]
// elemen indeks ke 2 akan hilang beserta elemnnya. yang hilang hanya 3 karena kita hanya menghaus satu elemen, berikut jika kita
// ingin menghapus dua elemn atau  lebih : 
numArray.splice(2,2);
console.log(numArray);// output : [1,empty,6,7,8]

// shift(), unshift() dan pop().
// shift menghapus elemen pertama, unshift menambahkan elemen di posis pertama dalam array, dan pop menghapus elemen terakhir di dalam array
// contoh penggunaan : 
numArray.shift();
console.log(numArray)// output : [empty,6,7,8]

numArray.pop();
console.log(numArray)// output : [empty,6,7]

numArray.unshift('tes');
console.log(numArray);

// Destructuring Array 
// Destructuring Array digunakan agar kita dapat mendaapatkan nilai dari array tanpa mengakses indeksnya.
// Penulisan destructuring array hampir sama dengan destructuring object, yang membedakannya adalah, variabel yang akan kita
// gunakan untuk mendapatkan nilai dari array tidak ada ketentuan tertentu. Lalu kurung yang digunakan adalah kurung siku bukan kurung kurawal.
// Berikut penggunaannya : 
const greetingArr = ['Hello',"Rio"];
const [sayHello,name] = greetingArr;

console.log(sayHello);
console.log(name);

// destructuing hanya dapat dilakukan jika array tidak bernilai null dan tidak undefined. kalau sampai nilainya null dan undefined, maka akan menyebabkan error


// Array Method
// Array memiliki banyak fungsi bawaan yang memilikii fitur tersendiri, diantaranya ada reverse dan sort

// 1. reverse()
// reverse berh=fungsi untuk membalikkan nilai array 
// contoh : 
greetingArr.reverse();
console.log(greetingArr);// output : ['Rio','Hello']
// output : ['Rio','Hello']

// 2. sort()
// sort berfungsi untuk mengurutkan nilai array. diawal sempat disinggung bahwa array menyimpan data secara terurut, benar, tetapi terurut
// dari indeksnya saja, tidak dengan nilainya. Secara default, sort mengurutkan nilai pada array secara ascending(dari kecil ke besar, atau A-Z).

const newNumArr = [4,5,8,7,6,2,1,3];
newNumArr.sort();
console.log(newNumArr);// output : [1,2,3,4,5,6,7,8]


// jika huruf, mka sort akan mengurutkannya berdasarkan abjad

// join(separator)
// adalah fungsi javascript yang diimana berfungsi untuk menggabungkan semua elemen yang ada dalam sebuah array menjadi satu string

// contoh : 
const arrNew = Array.from(greetingArr);
console.log(arrNew.join(' ')) ;


