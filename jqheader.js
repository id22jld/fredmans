function fader() {
    $("nav a").hover(
        function() {
            $("nav a").not(this).fadeTo(0, 0.5);
        },
        function() {
            $("nav a").fadeTo(0, 1);
        }
    );
    
    if ($(".top-top h3").length) {
        $(".top-top h3").fadeTo(0, 0.1);
    
        $(".top-top h3").hover(
            function() {
                $(this).fadeTo(0, 1);
            },
            function() {
                $(this).fadeTo(0, 0.1);
            }
        );
    }
}

function subMenuSlide() {
    $(".dropdown-titel").click(function() {

        $(this).next(".submenu").slideToggle(300);

        $(this).find(".pil").toggleClass("rotate");
    });
}

$(document).ready(fader);
$(document).ready(subMenuSlide);
  