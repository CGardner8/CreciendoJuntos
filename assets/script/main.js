const firstNav = document.getElementById("firstNav");
const secondNav = document.getElementById("secondNav");
const logoToShow = document.getElementById("logoToShow");

window.addEventListener("scroll", function () {
  if (isElementVisible(firstNav)) {
    logoToShow.classList.add("d-none");
    logoToShow.classList.remove("d-block");
    secondNav.classList.add('justify-content-center')
    secondNav.classList.remove('justify-content-sm-around')
  } else {
    logoToShow.classList.add("d-block");
    logoToShow.classList.remove("d-none");
    secondNav.classList.add('justify-content-sm-around')
    secondNav.classList.remove('justify-content-center')
  }
});

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom >= 0;
}
