function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//no.2

var slideIndex = 2;
showSlides1(slideIndex);

function plusSlides1(n) {
  showSlides(slideIndex += n);
}

function currentSlide1(n) {
  showSlides(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 2}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots1.length; i++) {
      dots[i].className = dots1[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}







function randomlogo()
{
  var logo = Math.floor(Math.random() * 4);

  if (logo===1)
  {
    document.getElementById("logoPic").height = "200";
    document.getElementById("logoPic").width = "200";
    document.getElementById("logoPic").src='angemiri.png';
    document.getElementById("logoPic").src='angemiri.png';
  }
  else if (logo===0)
  {
    document.getElementById("logoPic").height = '200';
    document.getElementById("logoPic").width = '200';
    document.getElementById("logoPic").src='agemiri_em.png';
    document.getElementById("ivon").src='agemiri_em.png';

  }
  else if (logo===2)
  {
    document.getElementById("logoPic").height = '200';
    document.getElementById("logoPic").width = '200';
    document.getElementById("logoPic").src='lisa.jpg';
    document.getElementById("ivon").src='lisa.jpg';
  }
  else if (logo===3)
  {
    document.getElementById("logoPic").height = '200';
    document.getElementById("logoPic").width = '200';
    document.getElementById("logoPic").src='agemiri_em.png';
    document.getElementById("ivon").src='agemiri_em.png';

  }
else if(logo===4)
{
  document.getElementById("logoPic").height = '200';
  document.getElementById("logoPic").width = '200';
  document.getElementById("logoPic").src='lisa.jpg';
  document.getElementById("ivon").src='lisa.jpg';

}
}
randomlogo();
