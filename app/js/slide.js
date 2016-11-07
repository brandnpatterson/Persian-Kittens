$('.nav-slide').click( () => { // when any .nav-slide is clicked
  var $this = this
  var scrollId = $($this).attr('data-click')
  $('body').animate({scrollTop: $('#'+scrollId).offset().top}, 1000) // animate to the respective data-click
})
