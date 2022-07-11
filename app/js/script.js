console.log('Working fine');

const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

header.addEventListener('click',function()
    {
          console.log('Hamburger menu click');
          if(header.classList.contains('open')){
            header.classList.remove('open');
           
            fadeElems.forEach(function(element){
              element.classList.add('fade-out');
              element.classList.remove('fade-in');
            });
            body.classList.remove('noscroll');
          }else{
            header.classList.add('open');
            fadeElems.forEach(function(element){
              element.classList.add('fade-in');
              element.classList.remove('fade-out');
            });
            body.classList.add('noscroll');
          }
          
    });