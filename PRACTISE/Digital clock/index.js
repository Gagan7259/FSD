const hour1 = document.getElementById('hour')
const minutes1 = document.getElementById('minutes')
const seconds1 = document.getElementById('seconds')
const ampm1 = document.getElementById('ampm')
function updateclock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM'

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  hour1.innerText = h;
  minutes1.innerText=m;
  seconds1.innerText=s;
  ampm,(innerText=ampm);
  setTimeout(()=>{
updateclock()
  },1000)
}
updateclock()
