// windowオブジェクト

// window.alert
window.alert("window.alertでブラウザにアラートを表示できる");
alert("windowオブジェクトはwindowの記述を省略できる")

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const alert1 = () => {
  window.alert("ボタン1をクリック")
}
const alert2 = () => {
  window.alert("ボタン2をクリック");
}
button1.addEventListener('click', alert1);
button2.addEventListener('click', alert2);

// window.openとwindow.close
let google
const openGoogle = () => {
  google = window.open('https://www.google.com/')
}
const closeGoogle = () => {
  google.close()
}

button3.addEventListener('click', openGoogle);
button4.addEventListener('click', closeGoogle);