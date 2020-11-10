// Открыть модальном
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Закрыть модальное
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let liteboxIndex = 1;
showlitebox(liteboxIndex);

// Вперед/назад контроль
function pluslitebox(n) {
  showlitebox((liteboxIndex += n));
}

// Элементы управления миниатюрами изображений
function currentlitebox(n) {
  showlitebox((liteboxIndex = n));
}

function showlitebox(n) {
  let i;
  const litebox = document.getElementsByClassName("mylitebox");
  const dotslitebox = document.getElementsByClassName("demolitebox");
  const captionTextlitebox = document.getElementById("captionlitebox");
  if (n > litebox.length) {
    liteboxIndex = 1;
  }
  if (n < 1) {
    liteboxIndex = litebox.length;
  }
  for (i = 0; i < litebox.length; i++) {
    litebox[i].style.display = "none";
  }
  for (i = 0; i < dotslitebox.length; i++) {
    dotslitebox[i].className = dotslitebox[i].className.replace(" active", "");
  }
  litebox[liteboxIndex - 1].style.display = "block";
  dotslitebox[liteboxIndex - 1].className += " active";
  captionTextlitebox.innerHTML = dotslitebox[liteboxIndex - 1].alt;
}
