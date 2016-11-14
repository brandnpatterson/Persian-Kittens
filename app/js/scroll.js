$('.nav-scroll').click(function() { // when any .nav-scroll is clicked

  var scrollId = $(this).attr('data-click');
  $('body').animate({scrollTop: $('#'+scrollId).offset().top}, 1000);
});
