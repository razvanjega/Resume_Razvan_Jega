(function() {
    $(".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        $(this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                $(this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return $(this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    $(".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = $(this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = $(this)
          .parent()
