$('.nav-scroll').click( () => { // when any .nav-scroll is clicked
  var $this = this;

  var scrollId = $($this).attr('data-click');
  $('body').animate({scrollTop: $('#'+scrollId).offset().top}, 1000);
});
