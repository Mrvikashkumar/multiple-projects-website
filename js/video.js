// video
let video = document.querySelector('.video');
let switchBtn = document.querySelector('.switch-button')
switchBtn.addEventListener('click', () => {
  let toggle = switchBtn.lastElementChild;
  if (toggle.classList.contains('play')) {
    video.play()
    toggle.classList.remove('play')
    toggle.classList.add('pause')
  } else {
    video.pause()
    toggle.classList.add('play')
    toggle.classList.remove('pause')
  }
})