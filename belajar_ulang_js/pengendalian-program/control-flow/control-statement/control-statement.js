// control statement berfungsi untuk mengontrol statement dan hanya dapat digunakan dalam perulangan atau percabangan. control statement terdiri dari break untuk menghentikan code statement dan langsung 
// skip ke akhir dari percabangan atau perulangan. Lalu ada continue yang berfungsi untuk melanjutkan perulangan atau percabangan
// contoh penggunaan break;

for (let i = 0 ; i < 10 ; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

// break sering digunakan dalam switch case

// contoh penggunaan continue : 

for (let i = 0; i < 10 ;i++){
    if(i == 5 ){

        continue;
    }
    console.log(i);
}

// iterasi, mulai dari 0, dan ketika i == 5, iterasi dihenikan dan akan lanjut ke setelah 5, yaitu 6. Itulah kenapa 5 tidak muncul dalam console
// continue hanya berlaku di body  perulangan
