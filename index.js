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
// let linkLone = document.querySelector('a');
// link.classList.add('site-nav__link')

// //4
// let leer = document.querySelector('a[href ^= "https://"]');
// leer.style.fontSize= '212px';

//5
let leero = document.querySelectorAll('a[href^="http://"]');
leero.forEach(element => {
    element.style.backgroundColor = 'orange';
});

//6

console.log("");

let trun2 = 5;
console.log(trun2);