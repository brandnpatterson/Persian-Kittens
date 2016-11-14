var Animate = (function() {

  // cacheDOM
  var $backUp    = $('#back-up');
  var $body      = $('body');
  var $navScroll = $('.nav-scroll');
  var $window    = $(window);

  // bind events
  $backUp.hide();
  $navScroll.click(scroll);
  $window.scroll(fade);

  function scroll() {
    var scrollId = $(this).attr('data-click');
    $body.animate({scrollTop: $('#'+scrollId).offset().top}, 1000);
  }

  function fade() {
    if ($(window).scrollTop() > 800) { // Scroll past 800 and back-up button is visible
      $backUp.fadeIn('slow');
    }
    else {  // else it fadesOut
      $backUp.fadeOut('fast');
    }
  }
})();
