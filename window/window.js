// windowオブジェクト

// window.alert
window.alert("window.alertでブラウザにアラートを表示できる");
alert("windowオブジェクトはwindowの記述を省略できる")

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const alert1 = () => {
  window.alert("ボタン1をクリック")
}
const alert2 = () => {
  window.alert("ボタン2をクリック");
}
button1.addEventListener('click', alert1);
button2.addEventListener('click', alert2);