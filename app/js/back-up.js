$(document).ready(function() {

  $('#back-up').hide()

  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      $('#back-up').fadeIn('slow')
    }
    else {
      $('#back-up').fadeOut('fast')
    }
  })
})
