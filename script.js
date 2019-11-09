function display() {
  window.location.replace("itempage.html");
}

let global = 59;
setInterval(() => {
  document.getElementsByClassName("timer")[0].innerHTML =
    "22:24:" + global.toString();
  global--;
}, 1000);
