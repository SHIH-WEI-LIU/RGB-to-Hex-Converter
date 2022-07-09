const rRange = document.querySelector("#r-range");
const gRange = document.querySelector("#g-range");
const bRange = document.querySelector("#b-range");
const output = document.querySelector("#output");

// rgb轉成Hex
function tenToHex(node) {
  return Number(node.value).toString(16).padStart(2, 0);
}
// 將Hex碼輸出在output
function toOutput(r, g, b) {
  return (output.textContent = "#" + tenToHex(r) + tenToHex(g) + tenToHex(b));
}

// 讓Hex碼轉成背景
function toBackground() {
  return (document.body.style.backgroundColor = output.textContent);
}

// 觸發事件
addEventListener("input", function (event) {
  const target = event.target;
  const oldValue = target.parentElement.children[2];
  if (target.tagName === "INPUT") {
    oldValue.textContent = target.value;
    toOutput(rRange, gRange, bRange);
    toBackground();
  } else {
    return;
  }
});