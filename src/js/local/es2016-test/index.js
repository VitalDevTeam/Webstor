//Arrow functions!
const double = n => n * 2
const pow = (x, n) => Math.pow(x, n)
const looksPrettyMuchLikeAFunction = (index, element) => {
	if(index < 3){
		element.style.display = 'none'
	}
}


//Template literals!
const sayHello = name => console.log(`Hello, ${name}!`)
const exclaimHello = name => console.log(`Hello, ${ name.toUpperCase() }!!!`)
const stretchHello = name => console.log(`Hello, ${ name.split('').join(' ') }.`)

sayHello('Vital');
exclaimHello('Vital');
stretchHello('Vital');


//Spread operator zomg!
let foo = [1, 2, 3];
let bar = [4, 5, 6];
let foobar = [...foo, ...bar]; //[1, 2, 3, 4, 5, 6]
let flatList = [1, ...[2, 3, 4], 5, 6]; //[1, 2, 3, 4, 5, 6]
let ohOkThisIsPrettyAwesome = [...document.querySelectorAll('div')];


//If the key and value are the same, just type it once!
let anObject = { foo };
// same as { foo: foo }


//Destructuring!
let [a, , b] = [1, 2, 3];
//a === 1, b === 3


//Unicode?! (Please don't actually do this)
let 虫 = 'Could not load image';

// Learn more! https://babeljs.io/docs/learn-es2015/
