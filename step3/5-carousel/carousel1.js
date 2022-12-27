/*
  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.
*/

/* MEMO: 
먼저 방법1을 작성한 후 다른 코드를 살펴봤는데 위치 이동 방식으로 구현한 캐러셀이 많았다.
그래서 연습을 위해 방법2를 추가해 위치 이동 방식으로 작성하려고 한다. (예정) */

// TAG: 방법1 - 클릭 할 때마다 innerHTML으로 이미지 태그 바꾸어 넣기 (인덱스 부여해 활용하기)
/*
translate와 관련된 애니메이션 효과를 줄 수 없음
(인터널 스타일에 keyframes을 넣어 유사하게 하려고 했는데 조금 어색하게 느껴졌다)
클릭 할 때마다 요소 자체를 바꾸는 방식이기 때문에 (위치이동이 아닌) 
*/

const $img = document.querySelectorAll('img');
const imgBox = document.querySelector('.image-box');

const prev = document.querySelector('.fa-arrow-left');
const next = document.querySelector('.fa-arrow-right');

const dotList = document.querySelector('.dot-list');
const dotItem = document.querySelectorAll('.dot-item');

prev.addEventListener('click', moveToPrev);
next.addEventListener('click', moveToNext);

$style = document.createElement('style');
// document.createElement("style").type = "text/css";
document.head.appendChild($style);
$style.innerHTML = `
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-5%);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

let currentIdx = 0;

dotList.addEventListener('click', (e) => {
  if (e.target.tagName === 'UL') {
    return;
  }

  console.log(e.target.dataset);

  for (let i = 0; i < dotItem.length; i++) {
    for (const singleDotItem of dotItem) {
      singleDotItem.dataset.idx = i++;
    }
  }

  currentIdx = e.target.dataset.idx;
  imgBox.innerHTML = `<img src = ${$img[e.target.dataset.idx].src} />`;
});

/*
let arr = [];

for (let i = 0; i < $img.length; i++) {
  $img[i].dataset.idx = i;
  arr = { name: [...$img[i].src].join(""), imgIdx: $img[i].dataset.idx };
  // console.log(arr, "arr");
}
*/

function moveToPrev() {
  currentIdx--;

  if (currentIdx < 0) {
    currentIdx = $img.length - 1;
  }

  imgBox.innerHTML = `<img src = ${$img[currentIdx].src} />`;
  console.log($img.length, '$img.length');
}

function moveToNext(e) {
  currentIdx++;

  const active = imgBox.classList.add('active');
  console.log(next.dataset.idx, 'e');
  console.log(e.target.dataset.idx, 'e');

  if (currentIdx === e.target.dataset.idx) {
  }

  if (currentIdx === $img.length) {
    currentIdx = 0;
  }

  imgBox.innerHTML = `<img src = ${$img[currentIdx].src} />`;

  /*
  let imgNum = 0;

  for (let i = 0; i < $img.length; i++) {
    console.log($img[i].dataset.idx, "imgIdx");
    console.log(i, "i");
  }
  */
}
