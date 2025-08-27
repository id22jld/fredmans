$(document).ready(function() {
    $("nav a").hover(
        function() {
            $("nav a").not(this).fadeTo(0, 0.5);
        },
        function() {
            $("nav a").fadeTo(0, 1);
        }
    );
    
    $(".top-top h3").fadeTo(0, 0.1);

    $(".top-top h3").hover(
        function() {
            $(this).fadeTo(0, 1);
        },
        function() {
            $(this).fadeTo(0, 0.1);
        }
    );
});
  