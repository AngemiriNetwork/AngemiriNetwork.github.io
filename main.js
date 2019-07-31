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



var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
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
