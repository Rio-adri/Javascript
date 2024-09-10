// object dalam javascript adalah tipe data yang menyimpan key dan juga value. Object tidak seperti tipe data primitif yang hanya dapat menampung satu nilai.
// Object dapat menampung banyak nilai dengan tipe ddata yang berebda- beda. 
// Didalam javascript selain dari tipe data number,string,boolean,null,undefined,dan float adalah tipe data object
// object di dalam javascript terbagi mnejadi dua yaitu object literals dan object constructor.

// berikut adlaah penulisan object literals : 
const namaObject  = {
    key1 : 'Value1',
    key2 : 'value2',
    'key 3' : 'value3',
    key4 : true
}

// penulisan object dilakukan dengan disimpan di dalam variabel, lalu dilanjjutkan dengan kurung kurawal. didalam kurung kurawal terdapat
// key dan value. Key dan value ini disebut dengan properti. antara satu properti dan properti lainnya dalam object dipisahkan dengan koma.
// tipe data dari key adalah string, dan tipe data value dapat bermacam- macam.
// jika ada key yang menggunakan spasi, maka penulisan key tersebut diapit dengan kutip 1. 

// kita dapat memnaggil object nya secara langsung dengan memanggil nam aobjectnya saja

console.log(namaObject);

// mengakses object : 

// 1. cara untuk mengakses properti object yang pertama adalah dengan dot notation(.). Penulisannya yaitu memanggil nama object lalu diikuti dengan dot (.) dan nama propertinya
// contoh : 
console.log(namaObject.key1);
// output : value1

// kekurangan dari penggunaan dot (.) ini adlaah, nama key harus benar, tidak boleh diawali angka, tidak boleh spasi, dan tidak boleh pakai karakter

// 2. Mengakses properti dengan menggunakan square bracket atau kurung siku ([]);

console.log(namaObject['key1']);
// Jika menggunakan squeare bracket, kita harus menggunakan tanda kutip yang mengapit nama keynya. dengan menggunakan square bracket pula,
// kita dapat memanggil key yang menggunakan spasi

console.log(namaObject['key 3']);

// 3. Menggunakan Object destructuring
// destructuring adalah kita mengeluarkan nilai dari object dan menyimpannya dalam satuan yang lebih kecil atau variabel
// adapun penulisan nya adlaah sebagai berikut : 
const {key1, key2} = namaObject;
console.log(key1);

// kita harus menuliskan variabel didalamnya sesuai dengan nama key nya agar kita bisa mendapatkan nilai dari keynya.  jika nama variabel yang kita buat tidak ada didalam properti object
// maka nilainya akan undefined. agar tidak mendappatkan nilai undefined, kita dapat meletakkan default value dari key yang tidak ada dalam properti object tersebut


const {key5 = 'tes'} = namaObject;
console.log(key5);
// output : tes

// dengan object destructuring, kita bisa mendapatkan semua nilai dri properti object dengan mudah dan tidak ribet, apabila object memiliki banyak properti yang banyak

const user = {
    name : 'rio',
    age : 19,
    hobi : 'code',
    isMale : true,
}

const {name,age,hobi,isMale} = user;

console.log(name);
console.log(age);
console.log(hobi);
console.log(isMale);

// Mengubah dan menghapus : 
// mengubah nilai di properti object
//mengubah nilai di object cukup menggunakan assigment operator. Kita bisa mengakses nilainya terlebih daulu baik dengan dot, dan square bracket  kita dpaat ubah nilainya
// contoh mengubah menggunakan dot(.) : 

user.name = 'Aji';

console.log(user.name);
// nama akan berubah jadi aji

// contoh menggunakan square bracket ([]): 
user['hobi'] = 'bulutangkis';

console.log(user['hobi']);

// menghapus nilai dari properti object
// menghapus nilai di properti object dapat menggunakan keyword delete sebelum mengakses propertinya. Mengaksesnya bisa menggunakan dot(.) 
// dan kurung siku ([]). Stelah dihapus, maka key nya akan bernilai undefined. Berikut contohnya :

// menggunakan dot (.) : 

delete user.name;
console.log(user.name);

// menggunakan square bracket[] : 
delete user['age'];
console.log(user['age']);

