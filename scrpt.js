function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

  const nav = document.querySelector('nav ul');
  const menu = document.querySelector('.menu input');
  const main = document.querySelector('.content');
  
  menu.addEventListener('click',function(){
      nav.classList.toggle('slide');
      main.classList.toggle('main');
      document.querySelector('#header').classList.toggle('header');
      document.querySelector('nav').classList.toggle('navbar');
  });
  