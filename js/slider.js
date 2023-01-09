// slider
let slideObj = [
  {
    id: 1,
    img: `./img/user-1.webp`,
    name: `Vikash Kumar`,
    profession: `senior web developer & CEO of xyz`,
    exCompany: ['amazon', 'microsoft'],
    currentCompany: 'facebook',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo architecto omnis ullam nobis unde quos nihil ex, ad, soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 2,
    img: `./img/user-2.webp`,
    name: `John Deo`,
    profession: `Web developer`,
    exCompany: [],
    currentCompany: 'paytm',
    text: `soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 3,
    img: ``,
    name: `John Smith`,
    profession: `senior web developer`,
    exCompany: ['amazon'],
    currentCompany: 'xyz',
    text: `He is the best software engineer I have ever see till now.`
  },
  {
    id: 4,
    img: ``,
    name: `Pradeep Mathur`,
    profession: `Manager of abc company`,
    exCompany: ['amazon', 'microsoft'],
    currentCompany: 'facebook',
    text: `iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 5,
    img: `./img/user-5.webp`,
    name: `Mr. smith`,
    profession: `senior web developer`,
    exCompany: ['Google', 'Adobe'],
    currentCompany: 'flipkart',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo architecto omnis ullam nobis unde quos nihil ex, ad, soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
]
let reviewsArr = JSON.parse(localStorage.getItem('reviews'))
if (!reviewsArr) {
  reviewsArr = [];
}
reviewsArr = slideObj.splice(0);
localStorage.setItem('reviews', JSON.stringify(reviewsArr))
// select element
let sliderContainer = document.querySelector('.sliders-container');
let container = document.querySelector('#slider .container');
let writeBtn = document.querySelector('.write-about-us-btn')

function writeReview() {
  let div = document.createElement('div');
  div.innerHTML = `<div class="form">
  <div class="form-header">
  <h3>Fill the blanks and say something about us</h3>
  <button class="close" title="close form button" onclick="closeForm(this)">
    <i class="fa-solid fa-close"></i>
  </button>
</div>
  <div class="input-field">
    <label for="fullName">Full Name</label>
    <input type="text" name="full name" class="input-text" id="fullName" placeholder="e.g. John Deo">
  </div>
  <div class="input-field">
    <label for="profession">What is your profession</label>
    <input type="text" name="profession" class="input-text" id="profession" placeholder="Web developer and product manager">
  </div>
  <div class="input-group">
    <div class="input-field">
      <label for="currentCompany">Where do you work</label>
      <input type="text" name="currentCompany" class="input-text" id="currentCompany" placeholder="Which is your current company">
    </div>
    <div class="input-field">
      <label for="exCompany">Have you work in another companies.</label>
      <input type="text" name="exCompany" class="input-text" id="exCompany" placeholder="Which is your previous companies">
    </div>
  </div>
  <div class="input-field">
    <label for="writeAboutUs">Write here about us</label>
    <textarea name="write-here" id="writeAboutUs" cols="30" rows="10" placeholder="He is the best..." class="input-text"></textarea>
  </div>
  <div class="button-group">
    <div class="input-field">
      <button type="button">reset</button>
    </div>
    <div class="input-field">
      <button type="button" onclick="addReview(this)">submit</button>
    </div>
  </div>
</div>`
  div.className = 'form-container';
  container.append(div);
}
writeBtn.addEventListener('click', writeReview)

function reviewObj(element) {
  let parentElement = element.parentElement.parentElement.parentElement;
  let inputs = parentElement.querySelectorAll('.input-field .input-text')
  let name, profession, exCompany, currentCompany;
  inputs.forEach(input => {
    switch (input.id) {
      case 'fullName':
        name = input.value;
        break;
      case 'profession':
        profession = input.value;
        break;
      case 'currentCompany':
        currentCompany = input.value;
        break;
      case 'exCompany':
        exCompany = input.value;
        break;
      case 'writeAboutUs':
        text = input.value;
        break;
    }
  })
  parentElement.parentElement.querySelector('.close').click();
  return { img: '', name, profession, currentCompany, exCompany, text }
}

function addReview(element) {
  let reviewsArr = JSON.parse(localStorage.getItem('reviews'))
  if (!reviewsArr) {
    reviewsArr = [];
  }
  reviewsArr.push(reviewObj(element));
  localStorage.setItem('reviews', JSON.stringify(reviewsArr))
  createSlideItem()
}

// function for close form
function closeForm(element) {
  let parentElement = element.parentElement.parentElement.parentElement;
  setTimeout(() => {
    parentElement.remove();
  }, 200)
  parentElement.children[0].style.animation = 'close-form 0.2s linear'
}

function createSlideItem() {
  reviewsArr = JSON.parse(localStorage.getItem('reviews'))
  if (!reviewsArr) {
    reviewsArr = [];
  }
  let html = '';
  reviewsArr.forEach(element => {
    html += `<div class="slider">
      <div class="slider-top">
        <div class="img">
          ${element.img == "" ? `<i class="fa-solid fa-user"></i>` : `<img src="${element.img}">`}
        </div>
        <div class="personalInfo">
          <h4 class="name">${element.name}</h4>
          <p class="profession">
            ${element.profession}
          </p>
          <div class="working-with">
            <div class="current-company">
              <i class="fa-brands fa-${element.currentCompany}"></i>
              <span>${element.currentCompany}</span>
            </div>
            <div class="ex-company">
              <i class="fa-brands fa-amazon"></i>
              <span>ex-amazon</span>
            </div>
            <div class="ex-company">
              <i class="fa-brands fa-microsoft"></i>
              <span>ex-microsoft</span>
            </div>
          </div>
        </div>
      </div>
      <div class="what-he-say">
        <i class="fa-solid fa-quote-left"></i>
        <span>${element.text}</span>
      </div>
    </div>`
  })
  if (reviewsArr.length > 0) {
    sliderContainer.innerHTML = html;
    sliderContainer.style.height = 'auto'
  } else {
    sliderContainer.innerHTML = `<h1>Nothing to see here</h1>`;
    sliderContainer.style.height = '90vh'
  }
}
createSlideItem()

let sliderBtn = document.querySelectorAll('.slider-btn button');
let sliderItem = document.querySelector('.sliders-container');

// click effect on buttons
sliderBtn.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    if (btn.id == 'left') {
      btn.style.transform = 'scale(.6)'
      btn.style.transformOrigin = 'left'
    } else {
      btn.style.transform = 'scale(.6)'
      btn.style.transformOrigin = 'right'
    }
  })
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1)'
  })
})