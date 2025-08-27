
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search");
  const searchInput = searchBox.querySelector("input");

  searchInput.addEventListener("focus", function () {
    searchBox.classList.add("focused");
  });

  searchInput.addEventListener("blur", function () {
    searchBox.classList.remove("focused");
  });
});
  