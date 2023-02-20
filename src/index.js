import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成する
  const li = document.createElement("li");
  li.className = "incomp-item";
  li.innerText = inputText;

  // （ここから実装）完了buttonを生成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除する
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // 完了したテキストを取得し、完了リストに追加
    // 完了リストに追加する新しいをdivを生成する
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    // 同様に完了リストに追加する新しいliを生成する
    const completeLi = document.createElement("li");
    completeLi.innerText = inputText;
    // 同様に戻すボタンを生成する
    const restoreButton = document.createElement("button");
    restoreButton.innerText = "戻す";

    // 新しく作ったcompleteDivの子要素に各要素を格納する
    completeDiv.appendChild(completeLi);
    completeDiv.appendChild(restoreButton);

    // ul(complete-list)の子要素としてcompleteDivを追加（完了リストに追加）
    document.getElementById("complete-list").appendChild(completeDiv);
  });

  // 削除buttonを生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulの子要素としてdivを追加（未完了リストに追加）
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
