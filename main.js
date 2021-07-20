//smooth scroll

$(function () {
  "use strict";

  $("#fourteen button").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      3000
    );
  });
});

$(function () {
  "use strict";

  $(".full button").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });
});
