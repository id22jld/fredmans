function setupHoverEffect() {
  const links = document.querySelectorAll('.menyrad');

  links.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.classList.add('hover-meny');
    });

    link.addEventListener('mouseout', function () {
      link.classList.remove('hover-meny');
    });
  });
};

document.addEventListener("DOMContentLoaded", setupHoverEffect);
