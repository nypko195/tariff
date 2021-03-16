"use strict";
window.addEventListener('DOMContentLoaded', () => { 

   //burger
   const burger = document.querySelector('.header__burger'),
         burgerMenu = document.querySelector('.header__menu'),
         content = document.querySelector('body');

   burger.addEventListener('click', (e) => {
      if (e.target === burger ) {
            burger.classList.toggle('active');
            burgerMenu.classList.toggle('active');   
            content.classList.toggle('lock');
         }
      });

   const home = document.getElementById('drop'),
         subBurgerBtn = document.querySelector('.header__menu-sublist'),
         burgerBtn = document.getElementById('two'),
         burgerActive = document.querySelector('.header__menu');
         console.log(burgerActive);

      home.addEventListener('click', (e) => {
      if (e.target === home) {
         subBurgerBtn.classList.toggle('active');
         home.classList.toggle('active');
         if (home.classList.contains('active')) {
            home.style.paddingBottom = '190px';
         }         
         else {
            home.style.paddingBottom = '20px';            
         }
      }
      e.preventDefault();
   });

   // home.addEventListener('mouseover', (e) => {
   //    if (e.target === home) {
   //       subBurgerBtn.classList.toggle('active'); 
   //       home.classList.toggle('active');
   //       if (home.classList.contains('active')) {
   //          home.style.paddingBottom = '190px';
   //       } 
   //    }
   // });

   // home.addEventListener('mouseout', (e) => {            
   //       if (e.target === home && e.relatedTarget === burgerActive) {
   //          subBurgerBtn.classList.toggle('active'); 
   //          home.classList.toggle('active');
   //          if (!home.classList.contains('active')) {
   //             home.style.paddingBottom = '20px';
   //          } 
         
   //    }    
   // });
   //бургер
});




























   
   

   





