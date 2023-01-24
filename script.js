var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  const mainEl = document.querySelector('main')
  // Selects the main element from the HTML (line 15)
  mainEl.style.backgroundColor = 'var(--main-bg)'
  // sets the background color of the main element equal to the value stored in the variable named "--main-bg" in the CSS (line 7)
  mainEl.textContent = "WISE Rocks"
  // sets the text of the main element to WISE Rocks
  mainEl.classList.add('flex-ctr')
  // adds a class to the main element called 'flex-ctr
  
  const topMenuEl = document.getElementById('top-menu')
  // selects the element with the id of 'top menu' from the HTML (line 13)
  topMenuEl.style.height = ('100%')
  // sets the height of the nav we selected above to 100%
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  // sets the background color of the nav we selected above to the value stored in the variable named "--top-menu-bg" in the CSS (line 8)
  topMenuEl.classList.add('flex-around')
  // adds a class to the nav called 'flex-around'
  
  for (let i = 0; i < menuLinks.length; i++) {
    // for loop to loop over the menuLinks array we created at the top
    const newAnchor = document.createElement('a')
    // creates a new anchor (a) tag and sets it to the variable 'newAnchor'
    newAnchor.textContent = menuLinks[i].text
    // sets the text of that anchor tag to the text stored in the menuLinks array
    newAnchor.setAttribute('href', menuLinks[i].href)
    // sets the href attribute of the anchor tag to the href stored in the menuLinks array
    topMenuEl.appendChild(newAnchor)
    // appends that new anchor tag to the nav we selected above
  }

  const subMenuEl = document.getElementById ('sub-menu')
  // Task 4.0
  subMenuEl.style.height = ('100%')
  // Task 4.1
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  // Task 4.2 - dropdowns 
  subMenuEl.classList.add('flex-around')
  // Task 4.3
  subMenuEl.style.position = "absolute"
  /* Task 4.4 */
  subMenuEl.style.top = "0"
//   Set the CSS top property of subMenuElto the value of 0.

// https://ps-wise-course.herokuapp.com/18-week/mod-1/week-5/day-2/hw/

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// Task 5
// Task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu a");
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
let showingSubMenu = false;
// // Declare a global showing SubMenu variable and initialize it to false;

// // Task 5.2
topMenuEl.addEventListener('click', function(evt) {
evt.preventDefault();
const link = evt.target;
if (link.tagName == "a") return;
console.log(link.textContent)
} )
// // Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault()method.
// HELP*****The second line of code function should immediately return if the element clicked was not an <a>element
// console.log the content of the <a> to verify the handler is working.
// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
// Clicking anywhere other than on a link should do nothing.  - YES THIS WORKS-CP

// Task 5.3
// if (link.classList.contains('active')) {
//   link.classList.remove('active');
//   showingSubMenu = false;
//   subMenuEl.style.top = '0';
//   return;
// }
// Next in the event listener, if the clicked <a>link has a class of active:
// removeClass (activeClass); 
// Remove the activeclass from the clicked <a>element.
// showingSubMenu = false
// Set the showingSubMenu to false.
// returnto exit the handler.

// Task 5.4
topMenuLinks.forEach(function(link) {
  link.classList.remove("active");
});
// Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

// Task 5.5
addEventListener = link.classList.add('active');
//Next, the event listener should add a class name of active to the <a>element that was clicked.

// Task 5.6
const linkData = menuLinks.find(function(linkObj) {
  return linkObj.text == link.textContent;
}) ;
showingSubMenu = 'SubLinks' in linkData;
// Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

// Progress Check
// Clicking any of the links should make that link "active" and clear the others:

//Task 6
subMenuEl.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (link.tagName == "a") return;
  console.log(link.textContent)
} )
//Task 6.1
showingSubMenu = false;
//6.2
topMenuLinks.forEach(function(link) {
  link.classList.remove("active");
});
//Remove the class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.
//6.3 HELP!**********************************
mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
//Update the contents of mainEl to the contents of the <a>element, within an <h1>, clicked within subMenuEl.

