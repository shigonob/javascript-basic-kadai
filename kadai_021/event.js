// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

// btnとtextというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");

const text = document.getElementById("text");

// HTML要素がクリックされたときに、2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
