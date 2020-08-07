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

const navbar = document.getElementById('navbar_list');
const sections = document.querySelectorAll('section');
const equipmentValue = document.getElementById('equipmentValue');

// /**
//  * End Global Variables
//  * Start Helper Functions
//  *
// */

function myFunction() {
  var x = document.getElementById("navbar_list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function calculateValue() {
  equipmentValue.innerHTML = "&#x20AC; 100.000";
}

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

  for (let section of sections) {
    const li = document.createElement('li');
    let id = section.id;
    let nav = section.dataset.nav;
    let link = document.createTextNode(nav);
    li.appendChild(link);
    li.setAttribute("name", id);
    navbar.appendChild(li);
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
      if(section.getBoundingClientRect().top < 150
      && section.getBoundingClientRect().top > 0) {
      // if the section already has a class active but is not close
      // to the top remove the class active to make sure only the section
      // close to the top has the class acive
      } else {
        section.classList.remove('active')
      };
    // if the section does not have the class active but is close to the stop
    // add the class active
  } else if (section.getBoundingClientRect().top < 150
    && section.getBoundingClientRect().top > 0) {
      section.classList.add('active');
    }
  }
};

// Scroll to anchor ID using scrollIntoView event

function goToPageSection() {
  
  navbar.addEventListener('click', function(e){
    const pageSection = document.querySelector('#' + e.path[0].attributes.name.nodeValue)
    pageSection.scrollIntoView();
    //added to account for the header
    window.scrollBy(0, -50);
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

goToPageSection();

// Set sections as active

document.addEventListener("scroll", setToActive);
