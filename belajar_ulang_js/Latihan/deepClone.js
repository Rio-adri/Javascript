const obj = {a: 1, b: {c: 2, d: [3, 4]}};
const clone = JSON.parse(JSON.stringify(obj));

console.log(obj.b.c)
console.log(clone.b.c);
console.log(clone);

