// test map

let a = [{}, {}, {}];

let b = a.map(item => {
    item.a = 1;
    return item;
});

b[0].a = 2;

console.log(a);
console.log(b);
