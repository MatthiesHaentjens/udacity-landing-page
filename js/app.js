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
const sections = document.querySelectorAll('section');

// /**
//  * End Global Variables
//  * Start Helper Functions
//  *
// */


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildMenu() {

  // for each of the section names add a list item including an
  // eventListener referring that section to the navigation menu
  // in the header

  for (let navItem of navItems) {
    const li = document.createElement('li');
    let id = navItem.id;
    let dataNav = navItem.dataset.nav;
    let link = document.createTextNode(dataNav)
    li.appendChild(link);
    li.addEventListener("click", function() {goToPageSection(id)});
    navigationMenu.appendChild(li);
  }
}

// Add class 'active' to section when near top of viewport

function setToActive() {

  // for each of the sections
  for (const section of sections) {
    // check whether the section already has an active class
    // to prevent adding an additional active class
    if(section.classList.contains('active')) {
      // if the section has the class active and the section is close
      // to the top return function
      if(section.getBoundingClientRect().top < 55
      && section.getBoundingClientRect().top > 0) {
        return
      // if the section already has a class active but is not close
      // to the top remove the class active to make sure only the section
      // close to the top has the class acive
      } else {
        section.classList.remove('active')
      };
    // if the section does not have the class active but is close to the stop
    // add the class active
    } else if (section.getBoundingClientRect().top < 55
    && section.getBoundingClientRect().top > 0) {
      section.classList.add('active');
    }
  }
};

// Scroll to anchor ID using scrollTO event

function goToPageSection(id) {

  const section = document.getElementById(id);
  const position = section.getBoundingClientRect().top

  // Scroll to anchor ID
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });

}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

buildMenu();

// Scroll to section on link click



// Set sections as active

document.addEventListener("scroll", setToActive);
