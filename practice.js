// console.log();
  // ブラウザのコンソールにテキストを表示させるメソッド
console.log("Hello World!!");  // => Hello World!!

// 変数の定義 let
let fruit = "apple"  // 変数fruitに"apple"を定義
console.log(fruit);  // => apple
  // 変数の再代入
fruit = "orange"  // 変数fruitに"orange"を再代入
console.log(fruit);  // => orange
    //再代入の時にlet fruit = "orange"とするとエラーが起こる（再定義不可）

// 定数 const
const sport = "soccer"  //定数sportに"soccer"を定義
console.log(sport);
  // 定数は再代入・再定義は出来ない
  // const sport = "baseball" => エラー

// 配列と繰り返し処理
let fruits = ["apple", "banana", "orange"];
const fruit_name = ([...arr]) => {
  for(let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
};
fruit_name(fruits);