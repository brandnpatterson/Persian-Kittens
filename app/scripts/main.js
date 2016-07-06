$(function() {

  // Click the alert button to see the alert
  $('#alertMe').click(function(e) {

    // prevent default behavior of the link
    e.preventDefault();

    // slide the alert down
    $('#successAlert').slideDown();

  });
});
