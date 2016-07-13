$(document).ready(function() {

  // Hide the entire wrapper when the document loads.
  $("#males, #females, #grayKittens, #whiteKittens, #shows").hide();

  // Show only males.
  $("#malesNav").click(function() {
    $("#logo, #females, #grayKittens, #whiteKittens, #shows").hide();
    $("#males").show();
  });

  // Show only females.
  $("#femalesNav").click(function() {
    $("#logo, #males, #grayKittens, #whiteKittens, #shows").hide();
    $("#females").show();
  });

  // Show only grayKittens.
  $("#grayKittensNav").click(function() {
    $("#logo, #males, #females, #whiteKittens, #shows").hide();
    $("#grayKittens").show();
  });

  // Show only whiteKittens.
  $("#whiteKittensNav").click(function() {
    $("#logo, #males, #females, #grayKittens, #shows").hide();
    $("#whiteKittens").show();
  });

  // Show only shows.
  $("#showsNav").click(function() {
    $("#logo, #males, #females, #grayKittens, #whiteKittens").hide();
    $("#shows").show();
  });
});
