//homework

//1.  Գրել կոդ, որը վերադարձնում է տվյալ պահին շաբաթվա օրը հայերեն լեզվով:

function weekDay() {
  let date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      console.log("Կիրակի");
      break;
    case 1:
      console.log("Երկուշաբթի");
      break;
    case 2:
      console.log("Երեքշաբթի");
      break;
    case 3:
      console.log("Չորեքշաբթի");
      break;
    case 4:
      console.log("Հինգշաբթի");
      break;
    case 5:
      console.log("Ուրբաթ");
      break;
    case 6:
      console.log("Շաբաթ");
      break;
  }
}
weekDay();

//2.  Տպել այն պահը(date), որը կլինի այս պահից սկսած`
//  1600օր 18ժամ 24րոպե 35վայրկյան հետո :

function future() {
  let date = new Date();
  date.setDate(date.getDate() + 1600);
  date.setHours(date.getHours() + 18);
  date.setMinutes(date.getMinutes() + 24);
  date.setSeconds(date.getSeconds() + 35);
  console.log(date);
}
future();

//3.  Գրել կոդ, որը աշխատում է որպես ժամացույց հետևյալ ֆորմատով՝ (15:05:07):

const watch = document.getElementById("time");
function watchTime() {
  let date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let secondes =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let time = hours + ":" + minutes + ":" + secondes;
  watch.innerText = time;
}
window.onload = () => {
  setInterval(watchTime, 1000);
};

//4*. Գրել կոդ, որը աշխատում է որպես վայրկյանաչափ:

const timeDisplay = document.getElementById("timeDisplay");
const timerStart = document.getElementById("timerStart");
const timerReset = document.getElementById("timerReset");

let interval;
let start = false;
let hours = 0;
let minutes = 0;
let secondes = 0;

timerStart.addEventListener("click", () => {
  if (start == false) {
    interval = setInterval(() => {
      ++secondes;
      if (secondes == 60) {
        ++minutes;
        secondes = 0;
      }
      if (minutes == 60) {
        ++hours;
        minutes = 0;
      }
      let s = secondes < 10 ? "0" + secondes : secondes;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let h = hours < 10 ? "0" + hours : hours;
      timeDisplay.innerText = h + ":" + m + ":" + s;
    }, 1000);
    start = true;
    timerStart.innerText = "Stop";
  } else {
    clearInterval(interval);
    timerStart.innerText = "Start";
    start = false;
  }
});

timerReset.addEventListener("click", () => {
  clearInterval(interval);
  start = false;
  timeDisplay.innerText = "00:00:00";
  hours = 0;
  minutes = 0;
  secondes = 0;
  timerStart.innerText = "Start";
});
