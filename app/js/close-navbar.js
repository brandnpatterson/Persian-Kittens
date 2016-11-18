/**
 * Closes the Navbar when a selection is made
 */

var CloseNavbar = (function(){

  // cacheDOM
  var $dropDownMenu = $('.dropdown-menu');
  var $navbarToggle = $('.navbar-toggle');
  var $navRoot = $('.nav-root');

  // bind events
  $navRoot.click(whenDropHidden);
  $dropDownMenu.click(whenDropVisible);

  function whenDropHidden() {
    if ($navbarToggle.is(':visible') && $dropDownMenu.is(':hidden')) {
      $navbarToggle.trigger('click');
    }
  }

  function whenDropVisible() {
    if ($dropDownMenu.is(':visible')) {
      $navbarToggle.trigger('click');
    }
  }
})();
