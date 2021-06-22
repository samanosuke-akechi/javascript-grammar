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
const callAnimal = function(animal) {
  console.log(animal);
}
callAnimal("cat");