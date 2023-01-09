// faq
// faq questions object
let faqQues = [
  {
    ques: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    arrow: `<i class="fa-solid fa-angle-down"></i>`,
    ans: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab minima quidem delectus? Adipisci
    doloremque reprehenderit voluptate aliquam suscipit quos consequuntur pariatur velit quam nesciunt?`
  },
  {
    ques: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    arrow: `<i class="fa-solid fa-angle-down"></i>`,
    ans: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab minima quidem delectus? Adipisci
    doloremque reprehenderit voluptate aliquam suscipit quos consequuntur pariatur velit quam nesciunt?`
  },
  {
    ques: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    arrow: `<i class="fa-solid fa-angle-down"></i>`,
    ans: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab minima quidem delectus? Adipisci
    doloremque reprehenderit voluptate aliquam suscipit quos consequuntur pariatur velit quam nesciunt?`
  },
  {
    ques: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    arrow: `<i class="fa-solid fa-angle-down"></i>`,
    ans: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab minima quidem delectus? Adipisci
    doloremque reprehenderit voluptate aliquam suscipit quos consequuntur pariatur velit quam nesciunt?`
  },
  {
    ques: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
    arrow: `<i class="fa-solid fa-angle-down"></i>`,
    ans: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ab minima quidem delectus? Adipisci
    doloremque reprehenderit voluptate aliquam suscipit quos consequuntur pariatur velit quam nesciunt?`
  },
]
function makeFaq(farArr) {
  let faqContent = document.querySelector('.faq-content');
  let fragment = new DocumentFragment();
  for (let item of farArr) {
    let question = document.createElement('div');
    question.className = 'question'
    let h5 = document.createElement('h5');
    h5.className = "show-question"
    h5.innerHTML = `<span>${item.ques}</span>
    ${item.arrow}`
    let p = document.createElement('p');
    p.innerHTML = `${item.ans}`
    question.prepend(h5);
    question.append(p);
    fragment.appendChild(question);
  }
  faqContent.appendChild(fragment);
}
makeFaq(faqQues)
// show answer
let showQuestion = document.querySelectorAll('.show-question');
showQuestion.forEach(element => {
  element.addEventListener('click', () => {
    for (let item of showQuestion) {
      if (item.classList.contains('show-ans')) {
        item.classList.remove('show-ans')
      }
    }
    element.classList.add('show-ans')
  })
})