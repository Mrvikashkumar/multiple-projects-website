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