// Object for about section
let aboutInfo = [
  {
    title: 'about',
    img: "./img/about-us.jpg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam. Sit quia aut repudiandae cum saepe mollitia amet deleniti dolorem exercitationem, ipsa minima alias natus nisi sed, facilis perspiciatis soluta fugit vero eum. Amet fugiat atque qui quisquam. Dolore deserunt eius architecto aliquid et alias ea. Eum quos molestias praesentium?`,
  },
  {
    title: 'history',
    img: "./img/History.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.`,
  },
  {
    title: 'vision',
    img: "./img/Vision.png",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam deleniti obcaecati quia doloremque dolorum consectetur cupiditate distinctio. Aliquid delectus, asperiores numquam saepe nam officia iure perferendis repudiandae in dignissimos odio eligendi corrupti? Voluptas ducimus esse quasi et aspernatur qui, excepturi voluptate architecto consequatur libero in laborum nam praesentium ipsum impedit explicabo beatae dicta iure illum mollitia quia dolore numquam.`,
  },
  {
    title: 'goal',
    img: "./img/Goal.png",
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