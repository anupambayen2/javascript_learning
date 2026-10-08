// Data Types in JavaScript
// 1. null
// 2. undefined
// 3. boolean
// 4. number
// 5. string
// 6. symbol
// 7. bigint
// 8. object -- complex data type

let counter = 100; // counter is a number
console.log(typeof(counter));
counter = false; // counter is a boolean
console.log(typeof(counter));
counter = "foo"; // counter is a string
console.log(typeof(counter));

let message;
console.log(typeof(message));

let obj = null;
console.log(typeof(obj));

let num1 = 100;
let num2 = 100.20;

console.log("--------------------");
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);
console.log()
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(Number.MAX_VALUE - Number.MAX_VALUE);


console.log();
console.log();

console.log('a'/2);

console.log();

console.log(NaN/2);
console.log(NaN==NaN);

let s1 = Symbol();

console.log(Symbol() == Symbol());

let emptyObject = {}

console.log(typeof emptyObject);


let person = {
    firstName : 'Anupam',
    lastName : 'Bayen'
};

console.log(person);
console.log();

let contact = {
    fistName : 'Anupam',
    lastName : 'Bayen',
    email : 'anupam.bayen2@gmail.com',
    phone : '8335050957',
    address : {
        building : 'D43',
        street : 'Market Yard Road',
        city : 'Mumbai',
        state : 'Maharasthra',
        country : 'USA'
    }

}

console.log(contact);

console.log();

console.log(contact.fistName);
console.log(contact.address.building);

