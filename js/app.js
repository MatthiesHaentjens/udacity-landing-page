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

function menu() {

  for (let navItem of navItems) {
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    let dataNav = navItem.dataset.nav;
    let link = document.createTextNode(dataNav);
    newA.appendChild(link);
    newA.title = dataNav;
    newA.href = #;
    newLi.appendChild(newA);
    navigationMenu.appendChild(newLi);
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

menu();

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
