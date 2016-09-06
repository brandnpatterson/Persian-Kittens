$(document).ready(function() {

  $("#backUp").hide();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      $("#backUp").fadeIn("slow");
    }
    else {
      $("#backUp").fadeOut("fast");
    }
  });
});
