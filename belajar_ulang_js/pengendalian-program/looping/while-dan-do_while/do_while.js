// do_while sebenarnya hampir sama dengan while, namun yang membedakannya hanya pada pengecekan kondisinya yang terletak diakhir.
// jadi setidaknya statement akan dijalankan satu kali baru melakukan pengecekan kondisi
// berikut contohnya : 

let i = 0;

do{

    console.log(`hai ini perulangan ke ${i}`);
    i++;

}while(i < 0);
// seperti yang kalian lihat, statement akan dicetak sekali lalu iterasi langsung berhenti karena kondisinya salah.
// i bernilai 0 dan pad apengecekan apakah i < 0 atau 0 < 0, dan jawabanny adalah false, maka program berhenti dan tidak mmemproses atau dalam kasus ini mencetak statementnya lagi

// contoh lagi : 

let a = 0;

do{
   console.log(`hai ini perulangan ke ${a}`); 
   a++;
}while(a < 6)


    // hati hati saat menggunakan perulangan ini, karena jika kamu salah dalam memberikan kondisi, misalnya jika
    // kondisi kamu bernilai true tanpa adanya kode yang merubah nilainya menjadi false, maka perulangan akan dicetak terus menerus.
    // dan jika kondisi yang kamu berikan adalah false, maka kode kamu tidak akan dicetak