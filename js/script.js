"use strict";
window.addEventListener('DOMContentLoaded', () => { 

   //burger
   //открытие бургера
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

   
   //кнопка домашний интернет
   const home = document.getElementById('btn-1'),
         subBurgerBtn = document.querySelector('.header__menu-sublist'),         
         headerBurger = document.querySelector('.header__burger');          

      home.addEventListener('click', (e) => {
      if (e.target === home) {
         subBurgerBtn.classList.toggle('active');
         home.classList.toggle('active');         
         if (home.classList.contains('active') && headerBurger.classList.contains('active')) {
            home.style.paddingBottom = '190px';
         }         
         else {
            home.style.paddingBottom = '20px';            
         }
      }
      e.preventDefault();
   });

   //валидация
   const form = document.querySelector('.header__bid-form');
   const userTel = document.getElementById('input1'),
         userName = document.getElementById('input2'),
         userAdress = document.getElementById('input3');       
         
   //обработчик события на отправку формы
   form.addEventListener('submit', (e) => {
      validationTel(userTel);
      validationName(userName); 

      e.preventDefault();
   });
   //проверка телефона
   function validationTel(user) {
      /*const regTel = /\d/g;*/
      const regTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      if (!regTel.test(user.value)) {
         user.classList.add('novalid');
         console.log('-');            
      } else {
         console.log('+');
         user.classList.remove('novalid');
         user.classList.add('valid');
      }
   }
   
   //проверка имени
   function validationName(name) {
      const regName = /[а-яА-Яa-zA-Z]/;
      if(!regName.test(name.value)) {
         console.log('-');
         name.classList.add('novalid');
      } else {
         console.log('+');
         name.classList.remove('novalid');
         name.classList.add('valid');
      }
   }  
   
   
});

