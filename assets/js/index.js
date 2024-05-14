const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btnTheme = document.getElementById('btnTheme');
const body = document.body;

const links = nav.querySelectorAll('.menu__link');

nav.addEventListener('click', function(event){
  if (event.target.matches('#btnOpen i')) {
    menu.classList.add('show-menu');
  }
  if(event.target.matches('#btnClose i')){
    menu.classList.remove('show-menu');
  }
  if(event.target.matches('.menu__link')){
    menu.classList.remove('show-menu');
  }
  for (const link of links) {
    link.classList.remove('active');
  }
  event.target.classList.add('active');
})


const ls = window.localStorage;

const theme = ls.getItem('darkMode');
const sun = 'bx bxs-sun';
const moon = 'bx bxs-moon';
if (theme) {
  body.classList.add('dark');
  btnTheme.firstElementChild.className = sun;
}else{
  body.classList.remove('dark');
  btnTheme.firstElementChild.className = moon;
}

btnTheme.addEventListener('click', function (){
  
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    ls.setItem('darkMode', true);
    btnTheme.firstElementChild.className = sun;
    
  }else{
    ls.removeItem('darkMode');
    btnTheme.firstElementChild.className = moon;
    
  }
})

const typed =  new Typed('#typing', {
  strings: ['Frontend Developer','Backend developer', 'Web Developer', 'Designer', 'Full-Stack Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 25,
  loop: true,
  loopCount: Infinity,
});