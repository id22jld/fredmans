function menuHover() {
  const links = document.querySelectorAll('.menyrad');

  links.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.classList.add('hover-meny');
    });

    link.addEventListener('mouseout', function () {
      link.classList.remove('hover-meny');
    });
  });
}

function searchFocus() {
  const searchBox = document.querySelector(".search");
  const searchInput = searchBox.querySelector("input");
  
  searchInput.addEventListener("focus", function () {
    searchBox.classList.add("focused");
  });
  
  searchInput.addEventListener("blur", function () {
    searchBox.classList.remove("focused");
  });
}

document.addEventListener("DOMContentLoaded", menuHover);
document.addEventListener("DOMContentLoaded", searchFocus);