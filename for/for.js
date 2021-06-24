// for文
const greet = "Hello World"
for (let i = 1; i <= 10; i++) {  // for (初期化式; 条件式; 加算式or減算式)
  console.log(`これは${i}回目の処理です`);
  console.log(greet);
}

// 減算式の場合
for (let i = 10; i >= 0; i--) {
  console.log(`カウントダウン${i}`);
  if (i == 0) {
    console.log("繰り返し終了");
  }
}