// mengubah nilai dengan tipe data tertentu ke tipe data boolean dapat menggunakan fungsi 'Boolean()' : B nya kapital

const angka  = 123;
const str = 'hai';
const float = 3.45;
const empty  = null;

console.log(Boolean(angka));
console.log(Boolean(str));
console.log(Boolean(float));
console.log(Boolean(empty));

// Seluruh nilai yang dikonversi keboolean yang menghasilkan nilai true disebut truthy, dan seluruh nilai yang dikonversikan ke boleean menghasilkan nilai false disebut falsy

// adapaun nilai yang dapat menghasilkan nilai falsy adalah : 
// false
// 0
// -0
// 0n
// ''
// null
// undefined
// NaN
