/*
  다음과 같은 조건을 만족하는 화면을 만들어 주세요!

  📌 버튼 클릭시 랜덤한 HEX CODE가 배경 색으로 변경되어야 합니다.
  📌 현재 HEX CODE가 <p> 태그의 텍스트로 표시되어야 합니다.
*/

const $p = document.querySelector("p");
const $btn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");

$btn.addEventListener("click", onHexCode);

function onHexCode() {
  let total = "";
  let hexCode = "";

  const characters = "0123456789ABCDEF";

  for (let i = 1; i <= 6; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    total += characters[randomNum];
  }
  hexCode = `#${total}`;

  $p.innerHTML = `HEX CODE: ${hexCode}`;
  wrapper.style.backgroundColor = hexCode;
}

// MEMO: 헥스 코드 만들기 - 비효율적인 방법 (작동은 함!)
/*
function onHexCode() {
  let first = "";
  let second = "";
  let third = "";
  let forth = "";
  let fifth = "";
  let sixth = "";
  let total = "";

  const characters = "0123456789ABCDEF";
  console.log(characters.length);

  for (let i = 1; i <= 6; i++) {
    first = characters[Math.floor(Math.random() * characters.length)];
    second = characters[Math.floor(Math.random() * characters.length)];
    third = characters[Math.floor(Math.random() * characters.length)];
    forth = characters[Math.floor(Math.random() * characters.length)];
    fifth = characters[Math.floor(Math.random() * characters.length)];
    sixth = characters[Math.floor(Math.random() * characters.length)];
  }

  return (total = `#${first}${second}${third}${forth}${fifth}${sixth}`);
}

console.log(onHexCode());
*/
