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

// 文字列・数値・変数の結合
const num = 19
const greet = "初めまして"
const introduction = greet + "田中と言います。" + num + 91 + "年生まれです。"
console.log(introduction);
  
// テンプレートリテラル
const introduction2 = `${greet}田中と言います。${num}91年生まれです。`
console.log(introduction2);
  
// 配列と繰り返し処理
let fruits = ["apple", "banana", "orange"];
const fruit_name = (arr) => {
  for(let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
};
fruit_name(fruits);

// 配列内の要素をシャッフル(ランダムソート)する方法
  // 参考記事：https://www.nxworld.net/js-array-shuffle.html
const shuffle = ([...array]) => {  // スプレッド演算子
  for (let i = array.length - 1; i >= 0; i--) {  // 配列の最後の要素から繰り返しスタート
    const j = Math.floor(Math.random() * (i + 1));  // ランダムな整数を代入
    [array[i], array[j]] = [array[j], array[i]];  // 一つ上のコードのランダムな整数の要素と、繰り返し中のiの整数の要素を入れ替える
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(shuffle(array));

  // ランダムソートを10回繰り返す
for (let i = 0; i < 10; i++) {
  console.log(shuffle(array));
}