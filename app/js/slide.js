$(document).ready(function() {
  $('.nav-slide').click(function() { // when any .nav-slide is clicked
    var $this = this
    var scrollId = $($this).attr('data-slide')
    $('body').animate({scrollTop: $('#'+scrollId).offset().top}, 1000) // animate to the respective data-slide
  })
})
