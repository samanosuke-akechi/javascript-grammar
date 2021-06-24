// プロパティ
  // 変数名 = {キー: バリュー}
  // {キー: バリュー}の部分がオブジェクト

// 定義
let human = {
  name: "Bob",
  gender: "man",
  age: 3
};

// 値の取得
console.log(human.name);  // 出力結果：Bob
console.log(`僕の名前は${human.name}です。${human.age}歳です`)
  // humanがオブジェクト名、nameとageがプロパティ名

// オブジェクトにプロパティを追加
human.city = "東京"
human['hobby'] = "落語"
console.log(human);

// プロパティの値を変更
human.name = "John"
console.log(human.name);

// JavaScriptにおけるメソッド
let human2 = {
  name: "mira",
  gender: "woman",
  age: 17,
  greet: function() {
    console.log("Hello World");
  },
  introduction: function() {
    console.log(`私の名前は${human2.name}、${human2.age}歳です。`)
  }
}
human2.greet();
human2.introduction();
// human2オブジェクトの中にgreetメソッドとintroductionメソッドを定義
// human2.greet();とhuman2.introduction();でメソッドを呼び出して実行