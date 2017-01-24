/**
 * Closes the Navbar when a selection is made
 */

var CloseNavbar = (function(){

  // cacheDOM
  var $dropDownMenu = $('.dropdown-menu'),
      $navbarToggle = $('.navbar-toggle'),
      $navRoot      = $('.nav-root');

  // Trigger a click event
  function triggerClick(selection) {
    selection.trigger('click');
  }
  // Close dropDown when secondary dropDown is hidden
  function whenDropHidden() {
    if ($navbarToggle.is(':visible') && $dropDownMenu.is(':hidden')) {
      triggerClick($navbarToggle);
    }
  }

  // Close dropDown when secondary dropDown is visible
  function whenDropVisible() {
    if ($dropDownMenu.is(':visible')) {
      triggerClick($navbarToggle);
    }
  }

  // Events
  $navRoot.click(whenDropHidden);
  $dropDownMenu.click(whenDropVisible);
})();
