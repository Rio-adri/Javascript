// switch case adalah control flow statement yang mengevaluasi(mennetukan nilai suatu hal terhadap acuan tertentu) expression terhadap beberapa kasus atau case.
// beirkut adlaah cara dan contoh penulisan switch case : 
// switch(expression ){
//      statement
// }

// contoh : 
const hari  = `SENIN`;
switch(hari.toLowerCase()){
    case 'senin' : 
    console.log(`hari ini adalah hari senin`);
    break;

    case 'selasa' : 
    console.log(`hari ini adalah hari selasa`);
    break;

    case 'rabu' : 
    console.log(`hari ini adalah hari Rabu`);
    break;

    case 'kamis' : 
    console.log(`hari ini adalah hari Kamis`);
    break;

    case 'jumat' : 
    console.log(`hari ini adalah hari Jumat`);
    break;

    case 'sabtu' : 
    console.log(`hari ini adalah hari sabtu`);
    break;

    case 'minggu' : 
    console.log(`hari ini adalah hari Minggu`);
    break;

    default : 
    console.log(`hari apa itu weh`)
    
    
}


// break; berfungsi untuk mengehntikan pengecekan kondisi, jadi ketika kondisi sudah benar, maka break akan berfungsi dan kode setelahnya
// tidak akan berjalan, lalu jika kita lupa menuliskan break, maka kode setelahnya akan ikut dieksekusi .
// berikut contoh kasusnya : 

const num = 'uy';

switch(num){
    case 1 : 
    console.log(`ini satu`);

    case 2 : 
    console.log(`ini dua`);
    break;

    case 3 : 
    console.log(`ini tiga`);

    // default : 
    // console.log(`tidak terdeteksi angka`)
}

// default : berfungsi ketika tidak ada case yang sama dengan expression
// jika kita lupa menulsi default, maka ketika menginputkan expression yang tidak sesuai, kode tidak error tetapi tidak ada kode yang dieksekusi atau tidak muncul output apapun
