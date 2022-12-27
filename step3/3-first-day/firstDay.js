/*
  다음과 같은 조건을 만족하는 주간 달력을 만들어 주세요!
  
  📌 현재 날짜를 기준으로, 이번 달의 1일이 보여져야 합니다.
  📌 1일을 기준으로 하는 요일의, 이후 날짜가 보여져야 합니다.
  📌 아래 예시를 참고해 주세요.

  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.
  
                예시1) -  2022년 1월 
  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |     |     |      |      |  1  |
  +---------------------------------------------+

                예시2) -  2022년 2월 
  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+
*/

const $tbody = document.querySelector('tbody');
const $tr = $tbody.querySelector('tr');

function calendarDate() {
  const date = new Date();

  // const currentDay = date.getDay(); // 요일 인덱스 0-6
  // const currentDate = date.getDate(); // 일 인덱스 1-31
  const currentMonth = date.getMonth(); // 월 인덱스 0-11
  const currentYear = date.getFullYear(); // 올해

  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 해당 달의 첫 번째 날의 요일
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate(); // 해당 달의 마지막 날의 날짜

  let emptyDates = '';
  for (let j = 0; j < firstDay; j++) {
    emptyDates += `<th></th>`;
  }

  let fullDates = '';
  for (let i = 1; i <= lastDate; i++) {
    if (firstDay + i <= 7) {
      fullDates += `<th>${i}</th>`;
    }
  }

  const total = emptyDates + fullDates;
  $tr.innerHTML = total;
}

calendarDate();
