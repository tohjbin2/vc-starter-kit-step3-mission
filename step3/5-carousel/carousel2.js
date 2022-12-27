/*
  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.
*/

// TAG: 방법2 - 위치 이동하기
/*
1번 방법 기능 적용 후, 애니메이션을 적용하려고 했는데
위치 이동형식(왼->오 or 오->왼으로 이동하는 형식)이 아닌
innerHTML 로 html 요소 자체를 갈아 끼우는? 방식이라
애니메이션이 효과를 줄 수가 없어서 다른 방식으로도 하려고 한다. (예정)
 */

const $img = document.querySelectorAll('img');
const imgBox = document.querySelector('.image-box');

const prev = document.querySelector('.fa-arrow-left');
const next = document.querySelector('.fa-arrow-right');

const dotList = document.querySelector('.dot-list');
const dotItem = document.querySelectorAll('.dot-item');

prev.addEventListener('click', moveToPrev);
next.addEventListener('click', moveToNext);

function moveToPrev() {
  //
}

function moveToNext() {
  //
}
