/*
  다음과 같은 조건을 만족하는 주간 달력을 만들어 주세요!
 
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 days 배열을 사용해야 합니다.
 
  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.


  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
*/

const days = ['일', '월', '화', '수', '목', '금', '토'];

// const trElement = document.querySelector('tr');
const thElements = document.querySelectorAll('th');

for (let i = 0; i < days.length; i++) {
  // thElement[i].innerHtml = 'aa';
  // thElements.innerHtml = 'bb';

  for (const thElement of thElements) {
    thElement.textContent = days[i++];
  }
}
