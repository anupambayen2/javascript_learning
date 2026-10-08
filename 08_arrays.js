// let scores = new Array(9,10,8,7,6);

// let scores = Array(10);

let colors = ['red','green','blue'];

console.log(colors);

let emptyArray = [];

console.log(emptyArray);

console.log(colors[0]);

console.log(colors[2]);

colors[2] ='White';

console.log(colors[2]);

console.log(colors.length);


// Basic operations in Array

// map, filter , reduce

// push - add any item in the end

colors.push('black');

console.log(colors);

// unshift to add any element in the beginning

colors.unshift('Yellow');

console.log(colors);

console.log(colors.pop());

console.log(colors.shift());

// finding any element in the index

console.log(colors.indexOf('green'));

console.log(Array.isArray(colors));
