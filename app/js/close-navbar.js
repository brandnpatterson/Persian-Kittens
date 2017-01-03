/**
 * Closes the Navbar when a selection is made
 */

var CloseNavbar = (function(){

  // cacheDOM
  var $dropDownMenu = $('.dropdown-menu');
  var $navbarToggle = $('.navbar-toggle');
  var $navRoot      = $('.nav-root');

  // Events
  $navRoot.click(whenDropHidden);
  $dropDownMenu.click(whenDropVisible);

  // close dropDown when secondary dropDown is hidden
  function whenDropHidden() {
    if ($navbarToggle.is(':visible') && $dropDownMenu.is(':hidden')) {
      $navbarToggle.trigger('click');
    }
  }

  // close dropDown when secondary dropDown is visible
  function whenDropVisible() {
    if ($dropDownMenu.is(':visible')) {
      $navbarToggle.trigger('click');
    }
  }
})();
