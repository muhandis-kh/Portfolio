

const navItem = document.querySelectorAll('.navbar-item');
const navLink = document.querySelectorAll('.nav-link');

let a,b;


navItem[a].addEventListener('click', function(){
   navLink[a].classList.add('my-active');
   navLink[b].classList.remove('my-active')
})