$(document).ready(function() {
  $(".link").hover(
    function() {
      $(this).stop().animate(
        { zoomDummy: 1.1 },
        {
          duration: 300,
          step: function(now, fx) {
            if (fx.prop === "zoomDummy") {
              $(this).css("transform", "scale(" + now + ")");
            }
          }
        }
      );
    },
    function() {
      $(this).stop().animate(
        { zoomDummy: 1.0 },
        {
          duration: 300,
          step: function(now, fx) {
            if (fx.prop === "zoomDummy") {
              $(this).css("transform", "scale(" + now + ")");
            }
          }
        }
      );
    }
  );
});
