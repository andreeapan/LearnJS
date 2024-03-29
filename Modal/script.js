'use strict';


 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnOpensModal = document.querySelectorAll('.show-modal');

 const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
 }

 const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   
};

 for(let i = 0; i < btnOpensModal.length; i++){
    btnOpensModal[i].addEventListener('click', openModal)
 }

 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);

 document.addEventListener('keydown', function(e){

    if(e.key === 'Escape' && !modal.classList.contains('hidden') ) {

            closeModal();
    }


 })