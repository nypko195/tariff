"use strict";
window.addEventListener('DOMContentLoaded', () => { 

   //burger
   const burger = document.querySelector('.header__burger'),
         burgerClick = document.querySelector('span'),
         burgerMenu = document.querySelector('.header__menu'),
         content = document.querySelector('body');

   burger.addEventListener('click', (e) => {
      if (e.target ===  burger || e.target === burgerClick) {
            burger.classList.toggle('active');
            burgerMenu.classList.toggle('active');   
            content.classList.toggle('lock');
         }
      });

   const home = document.getElementById('btn-1'),
         subBurgerBtn = document.querySelector('.header__menu-sublist'),         
         burgerActive = document.querySelector('.header__menu');         

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

   //валидация
   const form = document.querySelector('.header__bid-form');
   const userTel = document.getElementById('input1'),
         userName = document.getElementById('input2'),
         userAdress = document.getElementById('input3');

         console.log(userTel);
         

      form.addEventListener('submit', (e) => {
      function validationTel(user) {
         let regTel = /\d/g;
         if (!regTel.test(user)) {
            console.log('Телефон не верен.');
         } else {
            console.log('+');
         }
      }
      // let abs = /\d/g.test(userTel);
      // console.log(abs);

      // function validationName(name) {
      //    let regName = /\w/g;
      //    if(!regName.test(name)) {
      //       console.log('-');
      //    } else {
      //       console.log('+');
      //    }
      // }
      
      validationTel(userTel);
      // validationName(userName);

         e.preventDefault();
   });   
});

