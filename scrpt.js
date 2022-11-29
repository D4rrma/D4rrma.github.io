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
  

  const menu = document.getElementById('toggle');
  const nav = document.getElementById('nav');
  menu.onclick = function(){
    menu.classList.toggle('on');
    nav.classList.toggle('on');
  }

  document.onclick = function(hide){
    if(hide.target.id !== 'nav' && hide.target.id !== 'toggle'){
      menu.classList.remove('on');
      nav.classList.remove('on');
    }
  }





