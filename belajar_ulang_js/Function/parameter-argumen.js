// Parameter didalam function berfungsi untuk menyimpan data yang akan kita inputkan lewwat pemanggilan function. Seperti yang sudah dipelajari sebelunya
// parameter itu seperti pemisalan bagi data yang akan kita inputkan ke dlaam function di identifiernya lewat pemanggilan function.
// Namun itu kurang tepat, parameter itu seperti sebuah variabel yang kita letakkan dalam identifier, namun nilai nya belum diinisiasi. Kita baru menginisiasikan nilai dari parameter
// disaat kita memanggil function tersebut dan memasukkan nilai saat memanggilnya, yang akhirnya nilai tersebut akan masuk ke dalam variabel parameter sesuai dengan posisi nilai nya diletakkan.
// Misal kita punya dua parameter dan kita memasukkan dua nilai saat memanggil functionnya, maka nilai pertama akan masukke parameter pertama, dan nilai kedua akan masukke paramter kedua.
// Nilai tersebutlah yang kita sebut dengan argumen.


function convertCelciusToFarenheit(temperature){
    const result = 9/5 * temperature + 32;
    console.log("Hasil Konversi : ", result);
}

const temperaturInCelcius = 90;

convertCelciusToFarenheit(temperaturInCelcius);

// output : 194

// argumen adalah nilai yang kita masukkan ke function saat dipanggil yang disimpan di dalam parameter. argumen dpat berupa nilai ataupun variabel
// yang menyimpan suatu nilai

// DEFAULT VALUE
// Default value adalah dimana kita tidak memasukkan nilai lewat argumen saat memanggil function melainkan memasukkan secara langsung nilai untuk parameternya di dalam identifiernya dengan cara menggunakan assignment operator lalu menulis nilainya
// contoh : 

function tambah(a = 1, b = 2){
    console.log(a + b);
}

tambah();

// jika sewaktu-waktu kita ingin mengubah nilai parameternya kita cukup memanggil functionnya dan menulis argumennya 

tambah(5,4);// output 9

tambah(4);
