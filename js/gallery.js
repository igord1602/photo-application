let galleryIndex = 1;
showgallery(galleryIndex);

// Вперед/назад элементы управления
function plusgallery(n) {
  showgallery((galleryIndex += n));
}

// Элементы управления миниатюрами изображений
function currentgallery(n) {
  showgallery((galleryIndex = n));
}

function showgallery(n) {
  let i;
  const gallery = document.getElementsByClassName("mygallery");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  if (n > gallery.length) {
    galleryIndex = 1;
  }
  if (n < 1) {
    galleryIndex = gallery.length;
  }
  for (i = 0; i < gallery.length; i++) {
    gallery[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  gallery[galleryIndex - 1].style.display = "block";
  dots[galleryIndex - 1].className += " active";
  captionText.innerHTML = dots[galleryIndex - 1].alt;
}
