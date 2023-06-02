//Завдання 1

//let name = prompt('What is your name?', ' ');
//alert(`Hello ${name}! How are you?`);

let name = prompt('What is your name?', ' ');
if (name === 'John'){
    alert('Hello John! How are you?');
}

//Завдання 2

let a = +prompt('Enter first number', ' ');
let b = +prompt('Enter second number', ' ');
alert(`addition ${a+b} 
subtraction ${a-b}
multiplication ${a*b}
segmentation ${a/b}`);

//Завдання 3

let firstValue = prompt ('enter 1st value', ' ');
let secondValue = prompt ('enter 2nd value', ' ');
if (firstValue == secondValue){
    alert(true)
} else {
    alert(false)
}


let book = 'About me';
let pages = 150;
if (book === pages){
    console.log(true)
} else {
    console.log(false)
}

//Завдання 4
let enter = [+prompt('1st number', '') +
    +prompt('2nd number', ' ') +
    +prompt('3d number', '')
    ]
alert(enter/3)


// Завдання 5

let nmb = 58694;
let arrayNmb = Array.from(nmb.toString());
console.log(arrayNmb);