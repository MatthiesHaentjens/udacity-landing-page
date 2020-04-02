/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navItems = document.getElementsByTagName('section');
const navigationMenu = document.getElementById('navbar_list');

// /**
//  * End Global Variables
//  * Start Helper Functions
//  *
// */

function buildMenu() {

  for (let navItem of navItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    let dataNav = navItem.dataset.nav;
    let link = document.createTextNode(dataNav);
    a.appendChild(link);
    a.href = '#'+ navItem.id;
    li.appendChild(a);
    navigationMenu.appendChild(li);
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

buildMenu();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
