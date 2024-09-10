// Map adalah struktur data yang mirip dengan object yaitu dengan key dan value, tetapi keynya bisa menyimpan tipe data apapun 
// tidak seperti object yang hanya memperbolehkan key berupa string.
// map disimpan di dalam kurung siku, kemudian untuk masing masing key dan value, dibungkus lagi dengan kurung siku, berikut contoh penulisan map.

const myMap = new Map([
    [1, "value1"],
    [2, "value2"],
    [3,"value3"]
]);

console.log(myMap);// output : Map(3) {1 =>'value1', 2 => 'value2', 3 => 'value3'}


// atau kita bisa membuat map tetapi belum mendefinisikannya, karena nanti kita akan mempelajari
// cara untuk mengakses map seperti menmabhkan key dan value tanpa harus mengotak atik map nya secara langsung

// Menambahkan key dan value di map
// 1. set(key,value)
// set menerima dua parameter, parameter satu untuk menentukan keynya dan parameter dua untuk valuenya.
// contoh : 
const myNewMap = new Map();

myNewMap.set('Indonesia', 'Jakarta');
myNewMap.set('Japan', 'Tokyo');
myNewMap.set('Amerika', 'New York');
myNewMap.set('India', 'New Delhi');

console.log(myNewMap);

// Mengakses Nilai atau value dalam map
// get(key)
// Kita dapat mengakses suatu nilai dalam map dengan menggunakan method get() dengan menerima satu parameter. Parameter tersebut berisi
// key. ketika kita memanggil getdengan key yang ada didalam map, maka value dari key tersebut akan tercetak
// contoh : 


console.log(myNewMap.get('Indonesia'));// output : Jakarta
console.log(myNewMap.get('India'));// output : New Delhi
console.log(myNewMap.get('vietnam'));


// Menghapus nilai pada map
// delete()
// method ini menerima satu parameter yaitu nama key. Nantinya nilai yang terhubung dengan key akan dihapus beserta keynya. Method ini akan mengembalikan nilai true jika 
// nilai berhasil dihapus, dan akan mengembalikan nilai false jika key yang ingin dihapus tidak ada.

console.log(myNewMap.delete('India'));// output : true
console.log(myNewMap.delete('Kamboja'));
console.log(myNewMap);
// output : key India dan value new Delhi menghilang dari map




