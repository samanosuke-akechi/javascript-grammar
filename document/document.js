// documentオブジェクト

// getElementById("id名")
  // 引数に指定したidのHTMLの要素を取得する
const get_p = document.getElementById("test");  // testというidを持ったHTMLの要素を取得
get_p.innerHTML = "Hello World!!"  //innerHTMLで要素の書き換え
console.log(get_p);  // 出力結果：<p id="test">Hello World!!</p>
console.log(get_p.innerHTML);  // 出力結果：Hello World!!

// document.getElementsByClassName("クラス名")
  // 引数に指定したクラス名のHTML要素を取得する
const getClass = document.getElementsByClassName("hoge");  // hogeというクラス名を持ったHTMLの要素を取得
console.log(getClass);  // 出力結果：HTMLCollection(2) [div.hoge, h1.hoge]
getClass[1].innerHTML = "h1要素"
console.log(getClass[1]);  // 出力結果：<h1 class="hoge">h1要素</h1>

// document.querySelectorAll("セレクタ名")
  // 引数にセレクタ名を指定して、合致するHTML要素を全て取得する
const getQuery = document.querySelectorAll(".hoge");
console.log(getQuery);  // 出力結果：NodeList(2) [div.hoge, h1.hoge]
console.log(getQuery[1]);  // 出力結果：<h1 class="hoge">h1要素</h1>