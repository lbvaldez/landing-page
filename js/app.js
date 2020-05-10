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

// build the nav

// createNav("Section 1");
var list1 = document.createElement("li");
list1.innerHTML = 'Section 1';
document.getElementById("navbar__list").appendChild(list1);
list1.id = "section1-nav";

// createNav("Section 2");
var list2 = document.createElement("li");
list2.innerHTML = 'Section 2';
document.getElementById("navbar__list").appendChild(list2);
list2.id = "section2-nav";

// createNav("Section 3");
var list3 = document.createElement("li");
list3.innerHTML = 'Section 3';
document.getElementById("navbar__list").appendChild(list3);
list3.id = "section3-nav";
// Change cursor type for links
document.getElementById("navbar__list").style.cursor = "pointer";

// Add class 'active' to section when near top of viewport
function makeActive() {
// section 1
var section1 = document.getElementById("section1");
var bounding1 = section1.getBoundingClientRect();
if (bounding1.top < 100 && bounding1.bottom > 100) {
  document.getElementById("section1").classList.add("your-active-class");
  document.getElementById("section1-nav").classList.add("your-active-class");
} else {
  document.getElementById("section1").classList.remove("your-active-class");
  document.getElementById("section1-nav").classList.remove("your-active-class");
};
// section 2
var section2 = document.getElementById("section2");
var bounding2 = section2.getBoundingClientRect();
if (bounding2.top < 100 && bounding2.bottom > 100) {
  document.getElementById("section2").classList.add("your-active-class");
  document.getElementById("section2-nav").classList.add("your-active-class");
} else {
  document.getElementById("section2").classList.remove("your-active-class");
  document.getElementById("section2-nav").classList.remove("your-active-class");
};
// section 3
var section3 = document.getElementById("section3");
var bounding3 = section3.getBoundingClientRect();
if (bounding3.top < 100 && bounding3.bottom > 100) {
  document.getElementById("section3").classList.add("your-active-class");
  document.getElementById("section3-nav").classList.add("your-active-class");
} else {
  document.getElementById("section3").classList.remove("your-active-class");
  document.getElementById("section3-nav").classList.remove("your-active-class");
};
};
// Add event listener to add active class when scrolling
document.addEventListener("scroll", function(){
  makeActive();
});

// Scroll to anchor ID using scrollTO event
// Section 1
document.getElementById("section1-nav").addEventListener("click", scrollToTop1);
var element1 = document.getElementById("section1");
function scrollToTop1() {
  element1.scrollIntoView({behavior: "smooth"});
};
// Section 2
document.getElementById("section2-nav").addEventListener("click", scrollToTop2);
var element2 = document.getElementById("section2");
function scrollToTop2() {
  element2.scrollIntoView({behavior: "smooth"});
};
// Section 3
document.getElementById("section3-nav").addEventListener("click", scrollToTop3);
var element3 = document.getElementById("section3");
function scrollToTop3() {
  element3.scrollIntoView({behavior: "smooth"});
};
