let slideautoIndex = 0;
showSlidesauto(slideautoIndex);

function showSlidesauto(n) {
  let i;
  const slidesauto = document.getElementsByClassName("mySlidesauto");
  const dotsauto = document.getElementsByClassName("dotauto");
  if (n < 1) {
    slideautoIndex = slidesauto.length;
  }
  for (i = 0; i < slidesauto.length; i++) {
    slidesauto[i].style.display = "none";
  }
  for (i = 0; i < dotsauto.length; i++) {
    dotsauto[i].className = dotsauto[i].className.replace(" active", "");
  }
  slidesauto[slideautoIndex - 1].style.display = "block";
  dotsauto[slideautoIndex - 1].className += " active";
  slideautoIndex++;
  if (slideautoIndex > slidesauto.length) {
    slideautoIndex = 1;
  }
  setTimeout(showSlidesauto, 5000);
}
