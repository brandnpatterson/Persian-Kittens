$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.backUp').fadeIn();
  } else {
    $('.backUp').fadeOut();
  }
});
