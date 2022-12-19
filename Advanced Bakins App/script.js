'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

const hearder = document.querySelector('.header');
const allSections = document.querySelectorAll('.section')
// console.log(allSections)

document.getElementById('sections--1');
const allButtons = document.getElementsByTagName('button')
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'))

// Creating and inserting elements
const message = document.createElement('div')
message.classList.add('cookie-message');
message.textContent = 'We use cookies to improve functionality and analytics.';
message.innerHTML = 'We use cookies to improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//will add message at the top of the page
// hearder.prepend(message)

//will add message at the buttom of the page
hearder.append(message)
// hearder.before(message);
// hearder.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
})

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'

// console.log(message.style.color)
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px'

//Change color of the elements
// document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attributes 
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

//Non-standard
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'))

//Data attributes
// console.log(logo.dataset.versionNumber);

//Classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains(); //not includes!

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)

//Scrolling 
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

//Adding animation
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth'
// });

//Modern 
section1.scrollIntoView({behavior:'smooth'})
   
})

// const h1 = document.querySelector('h1');

// const alertH1 = function(e){
//   alert('addEventListener: Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1)
// }

// h1.addEventListener('mouseenter', alertH1)
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

//rgb

