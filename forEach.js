// forEach関数
  // forEach関数とは、配列に格納されている要素1つひとつに対して、繰り返し処理を行う場合に用いられる関数。
let fruits = ["apple", "banana", "orange"]
let num = 1

fruits.forEach(function(item) {
  console.log(`${num}回目の処理：${item}`);
  num++;
})