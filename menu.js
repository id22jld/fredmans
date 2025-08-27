$(document).ready(function() {
    $(".dropdown-titel").click(function() {

        $(this).next(".submenu").slideToggle(300);

        $(this).find(".pil").toggleClass("rotate");
    });
});
