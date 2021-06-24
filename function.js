// 関数

// function（関数宣言）
function sayHello() {
  console.log("Hello");
}
sayHello();
sayHello();

function say(greet) {
  console.log(greet);
}
say("Good Morning");
say("Good Afternoon");

// 戻り値
function calc(num1, num2) {
  return num1 * num2
}
console.log(calc(3, 4));  // 出力結果：12 （returnがないとundefinedが出力される）

// 関数式
const callAnimal = function(animal) {  // function(){}の部分を無名関数という
  console.log(animal);
}
callAnimal("cat");

// 関数式と関数宣言の違い
  // 関数式は定義してからでないと呼べない（読み込みは定義した後である必要がある）
  // 関数宣言の読み込みが先にきても読み込むことができる

// 即時関数
(function countNum(num) {
  console.log(num);
})(1)  // この時点で呼び出している → 出力結果：1

// アロー関数
const callName = (name1) => {
  console.log(name1);
}
callName("田中");