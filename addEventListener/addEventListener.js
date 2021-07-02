// addEventListener
window.addEventListener('load', function(){
  const getH1 = document.getElementById("test")
  getH1.innerHTML = "ページ読み込みでh1要素に対してイベント発火"
})

const getButton1 = document.getElementById("button1")
getButton1.addEventListener('click', function(){
  console.log("ボタン1をクリックしました");
})

const getButton2 = document.getElementById("button2")
const changeColor = () => {
  getButton2.setAttribute("style", "color: red;")
  console.log("カーソルを載せたらボタン2の文字色が赤くなる")
}
getButton2.addEventListener('mouseover', changeColor)

getButton2.addEventListener('mouseout', function() {
  getButton2.removeAttribute("style", "color: red;")
  console.log("カーソルを外すとボタン2の文字色が元に戻る");
})

// keypressイベント
  // キーが押された時に発火する
  // 文字が入力された時に発火する（escキーやenterキーなどでは発火しない）
const getInput = document.getElementById("form");
getInput.addEventListener("keypress", function(e) {
  console.log(e.key);
})

// keyupイベント
  // キーが押された状態から離された時に発火する
  // escキーやenterキー、矢印キーでも発火する
let right = 0
let left = 0
const getInput2 = document.getElementById("form2");
getInput2.addEventListener("keyup", function(e) {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    console.log("矢印キーの右が押されました");
    right++;
    console.log(right);
  } else if (e.key == "ArrowLeft") {
    console.log("矢印キーの左が押されました");
    left++;
    console.log(left);
  }
})

// keydownイベント
  // キーが押された時に発火する
  // キーを押しっぱなしにすると連続的にイベント発火する
  // escキーやenterキー、矢印キーでも発火する
const getInput3 = document.getElementById("form3");
getInput3.addEventListener("keydown", function(e) {
  console.log(e.key);
})