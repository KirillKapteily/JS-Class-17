//1
let text = document.querySelector('#p-id');
text.textContent = 'text';

text.style.backgroundColor = 'red';

//2
let navYe = document.querySelector('.site-nav')
navYe.style.backgroundColor = 'yellow';

// let linkText = document.querySelector('.site-link');
// linkText.style.fontSize = '56px';

//3
let linkLone = document.querySelector('a');
linkLone.classList.add('site-nav__link')

// //4
// let leer = document.querySelector('a[href ^= "https://"]');
// leer.style.fontSize= '212px';

//5
let leero = document.querySelectorAll('a[href^="http://"]');
leero.forEach(element => {
    element.style.backgroundColor = 'orange';
});

//6
let title = document.querySelector('h1');
title.textContent = 'TAYLOR SWIFT';
title.classList.add('olo');
// olo.style.backgroundColor = 'green';
title.classList.replace('olo', 'color');

let listCheck = document.querySelector('a');
listCheck.classList.contains('list');
console.log(listCheck.classList.contains('list'));

//7 calc

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("res")

function calculate(operation) {
    // Get the values from the input elements and parse them as numbers
    let a = parseFloat(num1.value);
    let b = parseFloat(num2.value);
    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            result = a / b;
            break;

        default:
            result = 'Invalid operation';
            break;
    }

    console.log(result);
}


calculate();