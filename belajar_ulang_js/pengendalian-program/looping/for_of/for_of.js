// for of pada javascript adalah iterasi yang dapat digunakan pada object yang dapat diiterasikan seperti array,strings,sets dan map
// berikut contoh penulisan for of   : 

// contoh pakai array : 

const arr = [1,2,3,4,5];

for (const items of arr){
    console.log(items);
}

// contoh pakai strings

const str = 'rio';

for (const items of str){
    console.log(items)
}

// contoh pakai set

const set = new Set([1,2,3,4,5]);

for (const items of set){
    console.log(items);
}

// contoh pakai map

const map = new Map([
    ['Indonesia' , 'Jakarta'],
    ['India' ,'New Delhi'],
    ['Amerika', 'NYC'],
]);

for(const items of map){
    console.log(items);
}

// items adalah sebutan untuk sebuah variabel yang menyimpan nilai array. Namun sebetulnya, variabel yang digunakan untuk menyimpan nilaihasil iterasi tidak harus
// items, boleh nama variabelnya lain.