let menuBtn = document.querySelector('.toggle-menu-icon');
let sideBar = document.querySelector('.side-bar-container');
let topBar = document.querySelector('.top-bar');
// button on click
menuBtn.addEventListener('mousedown', () => {
  menuBtn.style.backgroundColor = 'rgb(235, 235, 235)'
  menuBtn.querySelector('.fa-bars').style.transform = "scale(.7)"
})
// show side bar
menuBtn.addEventListener('mouseup', () => {
  menuBtn.style.backgroundColor = '#fff'
  menuBtn.querySelector('.fa-bars').style.transform = "scale(1)"
  sideBar.style.display = 'block';
})
// hide side bar
addEventListener('click', (e) => {
  if (e.target == sideBar) {
    sideBar.style.display = "none";
  }
})
// scroll effect on top bar
window.addEventListener('scroll', (e) => {
  if (scrollY >= 60) {
    topBar.style.position = "sticky";
    topBar.style.top = "0";
    topBar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
  } else {
    topBar.style.position = "unset";
    topBar.style.boxShadow = "unset";
  }
})