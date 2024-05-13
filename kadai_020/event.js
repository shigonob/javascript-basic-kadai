// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// btnとtextというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById("btn");

const Text = document.getElementById("text");

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener("click", () => {
  Text.textContent = "ボタンをクリックしました";
});
