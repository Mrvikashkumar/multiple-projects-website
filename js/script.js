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
window.addEventListener('scroll', (e)=>{
  if(scrollY >= 60){
    topBar.style.position = "sticky";
    topBar.style.top = "0";
    topBar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
  }else{
    topBar.style.position = "unset";
    topBar.style.boxShadow = "unset";
  }
})
let tapToTopBtn = document.querySelector('.go-top');
tapToTopBtn.addEventListener('click', e =>{
  console.log(e.clientY = 0)
})

// giveaway timer
let deadline = new Date("january 15, 2023 11:30:00").getTime();
let x = setInterval(function () {
  let currentDate = new Date().getTime()
  let t = deadline - currentDate;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (days)
    document.querySelector('.days').innerHTML = `${days}<br>DAYS`
  document.querySelector('.hours').innerHTML = `${hours}<br>HOURS`
  document.querySelector('.mins').innerHTML = `${minutes}<br>MINS`
  document.querySelector('.secs').innerHTML = `${seconds}<br>SECS`
  if (t < 0) {
    clearInterval(x);
    document.querySelector('.giveaway-timer').innerHTML = `<div style="color: red; font-size: 3rem; font-style: italic;">Time is out!</div>`
  }
}, 1000)


// Object for about section
let aboutInfo = [
  {
    title: 'about',
    img: "img/about-us.jpg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam. Sit quia aut repudiandae cum saepe mollitia amet deleniti dolorem exercitationem, ipsa minima alias natus nisi sed, facilis perspiciatis soluta fugit vero eum. Amet fugiat atque qui quisquam. Dolore deserunt eius architecto aliquid et alias ea. Eum quos molestias praesentium?`,
  },
  {
    title: 'history',
    img: "img/History.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.`,
  },
  {
    title: 'vision',
    img: "img/Vision.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.`,
  },
  {
    title: 'goal',
    img: "img/Goal.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis rliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.`,
  }
]
let tabs = document.querySelectorAll('.tab');
tabs.forEach(element => {
  element.addEventListener('click', e => {
    for (let tab of tabs) {
      if (tab.classList.contains('active')) {
        tab.classList.remove('active')
      }
    }
    for (let item of aboutInfo) {
      if (element.textContent.toLocaleLowerCase() === item.title) {
        element.parentElement.parentElement.previousElementSibling.children[0].src = `${item.img}`;
        element.parentElement.nextElementSibling.innerHTML = `</div class="about-para"><h4>${item.title.toUpperCase()}</h4><br><p>${item.content}</p><div>`
        element.classList.add('active');
      }
    }
  })
})
