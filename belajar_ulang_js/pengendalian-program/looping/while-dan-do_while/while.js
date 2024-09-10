// while adalah perulangan yang ketika nilainya true, maka iterasi akan terus berlanjut, namun jika nilainya false, maka iterasi akan berhenti
// contoh penggunaan dan penulisan perulangan while

let i = 1;

while (i < 6){
    console.log(`hai ini perulangan ke ${i}`);
    i++;
}

// seperti contoh diatas, pertama kondisi diperiksa apakah nilainya true atau tidak.
// i pada awalnya adalah bernilai 1. kemudian i diperiksa apakah benar i < 5 dan hasilnya true, maka statement aakan dilakukan yaitu
// mencetak hai ini perulangan ke ${i}. setelah itu, i++ yang artinya i mengalami increment atau penambahan satu nilai.
// iterasi akan terus berulang dan statement akan terus dicetak sampai i = 6. ketika i = 6 maka expression nya bernilai false.
// karena 6 tidak kurang dari 6. maka perulangan pun berhenti.