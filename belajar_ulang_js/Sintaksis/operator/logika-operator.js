// AND (&&) : adlaah operator logika yang menerima dua operand. operasi akan bernilai true jika kedua operand bernilai true. Namun, jika slaah satu operand bernilai false, maka operasi tersbut akan bernilai false.
// jika keduanya false, maka operasi akan bernilai false

const a = true;
const b = false;

console.log(a && a);// true
console.log(a && b);// false

console.log(true && true);// true
console.log(false && true);// false
console.log(false && false);// false

console.log('\n');

//OR (||) : adalah operator logika yang menerima dua operand. Operasi akan bernilai true jika salah satu saja bernilai true.
// namun jika keduanya bernilai false  maka hasil operasi akan false

console.log(true || true);// true
console.log(true || false);// true
console.log(false || false);// false

console.log('\n');


// NOT (!) : adalah operator logika yang menerima satu operand dan mengubah nilai operand tersebut. jika nilainya true maka akan jadi NOT true atau false
// jika false, Maka akan jadi NOT false atau true

console.log(!true);
console.log(!false);

