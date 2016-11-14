$('#back-up').hide(); // Initially, back-up button is hidden

$(window).scroll( () => {
  if ($(window).scrollTop() > 800) { // Scroll past 800 and back-up button is visible
    $('#back-up').fadeIn('slow');
  }
  else {  // else it fadesOut
    $('#back-up').fadeOut('fast');
  }
});
