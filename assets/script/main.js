const firstNav = document.getElementById("firstNav");
const secondNav = document.getElementById("secondNav");
const logoToShow = document.getElementById("logoToShow");

// Cada vez que se de scroll en la página, se ejecutará el siguiente código.
window.addEventListener("scroll", function () {
  if (isElementVisible(firstNav)) {
    logoToShow.classList.add("d-none");
    logoToShow.classList.remove("d-block");
    secondNav.classList.add('justify-content-center');
    secondNav.classList.remove('justify-content-around');
  } else {
    logoToShow.classList.add("d-block");
    logoToShow.classList.remove("d-none");
    secondNav.classList.add('justify-content-around');
    secondNav.classList.remove('justify-content-center');
  }
});

// Determina si el elemento es visible.
function isElementVisible(element) {
  // Constante que declara la posición de mi parámetro.
  const rect = element.getBoundingClientRect();
  // Determina si el límite inferior del rectángulo que contiene al elemento es mayor a 0, si lo es,
  // quiere decir que el elemento es visible porque se encuentra dentro de los márgenes visibles de la página.
  return rect.bottom > 0;
}

// Copia el contenido de un elemento al portapapeles.
function copyToClipboard(phoneElementId) {
  // Obtiene el elemento que contiene el teléfono.
  const copyText = document.getElementById(phoneElementId);
  // Guarda el teléfono.
  const text = copyText.innerHTML;
  // Copia el texto al portapapeles.
  navigator.clipboard.writeText(text);
  // Muesta la alerta modificando el texto del elemento.
  copyText.innerHTML = "Copiado!";
  // Reasigna el texto original al elemento.
  setTimeout( function() {
    copyText.innerHTML = text;
  }, 800);
}