/**
 * Animates the scrolling navigation
 */

var scrollClick = (function() {

  // cacheDOM
  var backUp     = document.getElementById('back-up'),
      $body      = $('body'),
      $navScroll = $('.nav-scroll'),
      $window    = $(window);

  function scroll() {
    var scrollId = $(this).attr('data-click');
    $body.animate({scrollTop: $('#'+scrollId).offset().top}, 1000);
  }

  function fade() {
    var last = +new Date();

    // Case 1: Scroll past 800, back-up button is visible
    if ($window.scrollTop() > 800) {
      var tick = function() {
        backUp.style.opacity = +backUp.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+backUp.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
      };
      tick();

    // Case 2: back-up button is hidden
    } else {
      backUp.style.opacity = 0;
    }
  }

  // Events
  backUp.style.opacity = 0;
  $navScroll.click(scroll);
  $window.scroll(fade);
})();
