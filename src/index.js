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

  // 完了buttonを生成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除する
    deleteFromIncompletelist(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグ(addTarget)の子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // ul(complete-list)の子要素にdivを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除buttonを生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompletelist(deleteButton.parentNode);
  });

  // divの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulの子要素としてdivを追加（未完了リストに追加）
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
