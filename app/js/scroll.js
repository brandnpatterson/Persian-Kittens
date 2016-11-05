$(document).ready(function() {

  $('#nav-home, #footer-home, #back-up').click( function() {
    $('body').animate({scrollTop: $('#nav-home').offset().top}, 1000)
  })

  $('#nav-about, #footer-about').click( function() {
    $('body').animate({scrollTop: $('#about').offset().top}, 1000)
  })

  $('#nav-contact, #footer-contact').click( function() {
    $('body').animate({scrollTop: $('#contact').offset().top}, 1000)
  })

  $('#nav-males, #footer-males').click( function() {
    $('body').animate({scrollTop: $('#males').offset().top}, 1000)
  })

  $('#nav-females, #footer-females').click( function() {
    $('body').animate({scrollTop: $('#females').offset().top}, 1000)
  })

  $('#nav-gray-kittens, #footer-gray-kittens').click( function() {
    $('body').animate({scrollTop: $('#gray-kittens').offset().top}, 1000)
  })

  $('#nav-white-kittens, #footer-white-kittens').click( function() {
    $('body').animate({scrollTop: $('#white-kittens').offset().top}, 1000)
  })

  $('#nav-shows, #footer-shows').click( function() {
    $('body').animate({scrollTop: $('#shows').offset().top}, 1000)
  })
})
