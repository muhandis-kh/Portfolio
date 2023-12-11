

const navItems = document.querySelectorAll('.navbar-items');
const navLink = document.querySelectorAll('.nav-link')
let active = navLink[0];
let acctive
let k = 1;


navItems.forEach(function (item){
   item.addEventListener('click', (e) => {
      if(k === 1){
         active.classList.remove('my-active');
         e.target.classList.add('my-active');
         acctive = e.target;
         k = 0;
      }
      else{
         acctive.classList.remove('my-active');
         e.target.classList.add('my-active');
         active = e.target;
         k = 1
      }

   })
})

const footerNavItem = document.querySelectorAll('.footer-nav__item')
console.log(footerNavItem)
const footerNavLinks = document.querySelectorAll('.footer-nav__item-link')
let j = 1;
let footerActive = footerNavLinks[0];
let emptyFooterActive;

footerNavItem.forEach(function (item){
   item.addEventListener('click', (e) =>{
      if(j === 1){
         footerActive.classList.remove('footer-my-active');
         e.target.classList.add('footer-my-active');
         emptyFooterActive = e.target;
         j = 0;
      }
      else{
         emptyFooterActive.classList.remove('footer-my-active');
         e.target.classList.add('footer-my-active');
         footerActive = e.target;
         j = 1
      }
   })
})

function calculateAge() {
   // Enter your birthdate here (year, month, day in order)
   var birthDate = new Date(1998, 7, 8);
   
   // Current date
   var currentDate = new Date();

   // Calculate age
   var age = currentDate.getFullYear() - birthDate.getFullYear();

   // If the birthday hasn't occurred yet this year, subtract one year
   if (currentDate.getMonth() < birthDate.getMonth() || 
       (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
       age--;
   }

   // Display age on the HTML page
   document.getElementById("age").innerHTML = age;
}