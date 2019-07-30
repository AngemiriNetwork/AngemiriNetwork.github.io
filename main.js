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
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
Collapse





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
