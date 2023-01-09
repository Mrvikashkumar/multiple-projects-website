// slider
let slideObj = [
  {
    id: 1,
    img: `./img/user-1.webp`,
    name: `Vikash Kumar`,
    profession: `senior web developer & CEO of xyz`,
    company: {
      exCompany: ['amazon', 'microsoft'],
      currentCompany: 'facebook',
    },
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo architecto omnis ullam nobis unde quos nihil ex, ad, soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 2,
    img: `./img/user-2.webp`,
    name: `John Deo`,
    profession: `Web developer`,
    company: {
      exCompany: [],
      currentCompany: 'paytm',
    },
    text: `soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 3,
    img: ``,
    name: `John Smith`,
    profession: `senior web developer`,
    company: {
      exCompany: ['amazon'],
      currentCompany: 'xyz',
    },
    text: `He is the best software engineer I have ever see till now.`
  },
  {
    id: 4,
    img: ``,
    name: `Pradeep Mathur`,
    profession: `Manager of abc company`,
    company: {
      exCompany: ['amazon', 'microsoft'],
      currentCompany: 'facebook',
    },
    text: `iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
  {
    id: 5,
    img: `./img/user-5.webp`,
    name: `Mr. smith`,
    profession: `senior web developer`,
    company: {
      exCompany: ['Google', 'Adobe'],
      currentCompany: 'flipkart',
    },
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo architecto omnis ullam nobis unde quos nihil ex, ad, soluta consectetur. Ex aperiam corporis dolores officiis blanditiis in nobis, iure fuga alias dolorum, voluptas autem accusamus. Consectetur iusto impedit, iure fuga assumenda placeat tenetur quis aperiam facere illum nihil officia!`
  },
]
let sliderContaint = document.querySelector('.sliders-container');
function createSlideItem(slideData){
  let fragment = new DocumentFragment();
  slideData.forEach(element => {
    let slide = document.createElement('div');
    slide.className = 'slider'
    let slideTop = document.createElement('div')
    slideTop.className = 'slider-top'
    let img = document.createElement('div')
    img.className = 'img'
    if(element.img == ""){
      img.innerHTML = `<i class="fa-solid fa-user"></i>`
    }else{
      img.innerHTML = `<img src="${element.img}">`
    }
    let personalInfo = document.createElement('div')
    personalInfo.innerHTML = `<h4 class="name">${element.name}</h4>
    <p class="profession">
      ${element.profession}
    </p>
    <div class="working-with">
      <div class="current-company">
        <i class="fa-brands fa-${element.company.currentCompany}"></i>
        <span>${element.company.currentCompany}</span>
      </div>
      <div class="ex-company">
        <i class="fa-brands fa-amazon"></i>
        <span>ex-amazon</span>
      </div>
      <div class="ex-company">
        <i class="fa-brands fa-microsoft"></i>
        <span>ex-microsoft</span>
      </div>
    </div>`
    slideTop.prepend(img)
    slideTop.append(personalInfo);
    let whatHeSay = document.createElement('div')
    whatHeSay.className = 'what-he-say'
    whatHeSay.innerHTML = `<i class="fa-solid fa-quote-left"></i>
    <span>${element.text}</span>`
    slide.prepend(slideTop);
    slide.appendChild(whatHeSay);
    fragment.appendChild(slide);
  })
  sliderContaint.append(fragment)
}
createSlideItem(slideObj)

let sliderBtn = document.querySelectorAll('.slider-btn button');
let sliderItem = document.querySelector('.sliders-container');

// click effect on buttons
sliderBtn.forEach(btn => {
  btn.addEventListener('mousedown', ()=>{
    if(btn.id == 'left'){
      btn.style.transform = 'scale(.6)'
      btn.style.transformOrigin = 'left'
    }else{
      btn.style.transform = 'scale(.6)'
      btn.style.transformOrigin = 'right'
    }
  })
  btn.addEventListener('mouseup', ()=>{
    btn.style.transform = 'scale(1)'
  })
})