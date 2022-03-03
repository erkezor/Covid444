$(".slide showing").hover(
      function () {
        $(this).append($("background", "green"));
      }, 
      function () {
        $(this).find("background", "green").remove();
      }
    );