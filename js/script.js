"use strict";
window.addEventListener('DOMContentLoaded', () => { 

   //burger//
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
         subBurgerBtn = document.querySelector('.header__menu-sublist');          
   const abs = document.querySelectorAll('.header__menu-btn');         

      home.addEventListener('click', (e) => {
         // if (e.target === home) {
         //    subBurgerBtn.classList.toggle('active');
         //    home.classList.toggle('active');         
         //    if (home.classList.contains('active') && headerBurger.classList.contains('active')) {
         //       home.style.paddingBottom = '190px';
         //    }         
         //    else {
         //       home.style.paddingBottom = '20px';            
         //    }
         // }

         if (e.target === home) {
            subBurgerBtn.classList.toggle('active');
            home.classList.toggle('active');
            if (home.classList.contains('active')  && burger.classList.contains('active')) {
               abs[0].style.height = '230px';
            } else {
               abs[0].style.height = 'auto';
            } 
      }       

      e.preventDefault();
   });

      // home.addEventListener('click', (e) => {
      //    if(e.target && subBurgerBtn.classList.contains('active') && burger.classList.contains('active')) {
      //       subBurgerBtn.classList.remove('active'); 
      //       abs[0].style.height = 'auto';           
      //    }
      // });

   //валидация//
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

   //карточка//  
   function cards() {
      class MenuCаrd {
         constructor(subtitle, icon1, text1, icon2, text2, price, btn, parentSelector, ...classes) {
            this.subtitle = subtitle;
            this.icon1 = icon1;
            this.text1 = text1;
            this.icon2 = icon2;
            this.text2 = text2;
            this.price = price;
            this.btn = btn;
            this.parent = document.querySelector(parentSelector);
            //this.classes = classes;
         }
         render() {
            // const tariffCard = document.createElement('div');            
            // if(this.classes.length === 0) {
            //    this.tariffCard = 'tariffs__item';
            //    tariffCard.classList.add(this.tariffCard);
            // }
            
            // tariffCard.innerHTML = `
            //    <h3 class="tariffs__item-subtitle">${this.subtitle}</h3>
            //    <div class="tariffs__column-item-row">
            //       <div class="tariffs__column-item-column">
            //          <img src="${this.icon1}" alt="" class="item__logo1">
            //          <p class="item__content">${this.text1}</p>
            //       </div>
            //       <div class="tariffs__column-item-column">
            //          <img src="${this.icon2}" alt="" class="item__logo1">                  
            //          <p class="item__content">${this.text2}</p>
            //       </div>                  
            //    </div>               
            //    <div class="tariffs__column-item-row2">
            //       <div class="tariffs__column-item-price">${this.price}</div>                  
            //       <button class="tariffs__column-item-btn btn">${this.btn}</button>
            //    </div>        
            //    `;
            // this.parent.append(tariffCard);
   

            this.parent.insertAdjacentHTML('beforeend', `
               <div class="tariffs__item">
                  <h3 class="tariffs__item-subtitle">${this.subtitle}</h3>
                  <div class="tariffs__column-item-row">
                     <div class="tariffs__column-item-column">
                        <img src="${this.icon1}" alt="" class="item__logo1">
                        <p class="item__content">${this.text1}</p>
                     </div>
                     <div class="tariffs__column-item-column">
                        <img src="${this.icon2}" alt="" class="item__logo1">                  
                        <p class="item__content">${this.text2}</p>
                     </div>                  
                  </div>               
                  <div class="tariffs__column-item-row2">
                     <div class="tariffs__column-item-price">${this.price}</div>                  
                     <button class="tariffs__column-item-btn btn">${this.btn}</button>
                  </div>                  
               </div> 
            `);                  
         }
      }

      fetch('http://localhost:3000/menu') 
         .then((response) => {
            return response.json();
         })
         .then((data) => { 
            data.forEach(({subtitle, icon1, text1, icon2, text2, price, btn}) => {        
            new MenuCаrd(subtitle, icon1, text1, icon2, text2, price, btn, '.tariffs__row').render();
         });
      });      
   }
   
      cards();     
});

