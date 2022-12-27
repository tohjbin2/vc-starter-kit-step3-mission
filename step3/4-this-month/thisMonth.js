/*
  다음과 같은 조건을 만족하는 월간 달력을 만들어 주세요!
  
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 현재 날짜를 기준으로, 이번 달의 일수가 1일부터 표시되어야 합니다.
  📌 이번 달의 1일 부터 마지막 일수 까지 표시되어야 합니다.
  
  🚨 HTML, CSS는 수정하지 않고 JS만 수정해주세요.
  

  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+
  |   6  |  7   |  8  |   9  |  10  |  11 |  12 |
  +---------------------------------------------+
  |  13  |  14  |  15 |  16  |  17  |  18 |  19 |
  +---------------------------------------------+
  |  20  |  21  |  22 |  23  |  24  |  25 |  26 |
  +---------------------------------------------+
  |  27  |  28  |  29 |  30  |      |     |     |
  +---------------------------------------------+
*/

const days = ["일", "월", "화", "수", "목", "금", "토"];
/*
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
*/

const $main = document.createElement("main");
const $thead = document.createElement("thead");
const trDays = document.createElement("tr");

const $tbody = document.createElement("tbody");
const trDate = document.createElement("tr");
const thDate = document.createElement("th");

document.body.appendChild($main);
$main.appendChild($thead);
$thead.appendChild(trDays).classList = "tr-days";
$main.appendChild($tbody);
$tbody.appendChild(trDate).classList = "tr-date";

/**
 * 예시: new Date(1995, 11, 17)
 * 결과: Sun Dec 17 1995 00:00:00 GMT+0900 (한국 표준시)
 * 해당 날짜의 '요일 월 날짜 연도' 순으로 표기됨
 */

function calendarDay() {
  trDays.innerHTML = days
    .map((day, idx) => `<th class='th-day'>${day}</th>`)
    .join("");
}
calendarDay();

function calendarDate() {
  const date = new Date();

  const currentDay = date.getDay(); // 요일 인덱스 0-6
  const currentDate = date.getDate(); // 일 인덱스 1-31
  const currentMonth = date.getMonth(); // 월 인덱스 0-11
  const currentYear = date.getFullYear(); // 올해

  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 해당 달의 첫 번째 날의 요일
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  /** const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();:
   * 해당 달의 마지막 날의 날짜
   *   new Date(currentYear, currentMonth + 1, 0)에 해당되는 날(=달의 마지막 날)의 날짜 반환 (currentMonth가 인덱스 0부터 시작하기 때문에)
   */

  let emptyDates = "";
  for (let j = 0; j < firstDay; j++) {
    emptyDates += `<td class='td-date'></td>`;
  }

  /* IMPORTANT: 
  추후 리팩토링 할 것 (중복되는 코드가 너무 많음) */
  let fullDates = "";
  let fullDates2 = "";
  let fullDates3 = "";
  let fullDates4 = "";
  let fullDates5 = "";
  for (let i = 1; i <= lastDate; i++) {
    if (i === currentDate) {
      if (firstDay + i <= 7) {
        fullDates += `<td class='td-today'>${i}</td>`;
      } else if (firstDay + i <= 14) {
        console.log(i);
        fullDates2 += `<td class='td-today'>${i}</td>`;
      } else if (firstDay + i <= 21) {
        fullDates3 += `<td class='td-today'>${i}</td>`;
      } else if (firstDay + i <= 28) {
        fullDates4 += `<td class='td-today'>${i}</td>`;
      } else if (firstDay + i <= 35) {
        fullDates5 += `<td class='td-today'>${i}</td>`;
      }
    } else {
      if (firstDay + i <= 7) {
        fullDates += `<td class='td-date'>${i}</td>`;
      } else if (firstDay + i <= 14) {
        console.log(i);
        fullDates2 += `<td class='td-date'>${i}</td>`;
      } else if (firstDay + i <= 21) {
        fullDates3 += `<td class='td-date'>${i}</td>`;
      } else if (firstDay + i <= 28) {
        fullDates4 += `<td class='td-date'>${i}</td>`;
      } else if (firstDay + i <= 35) {
        fullDates5 += `<td class='td-date'>${i}</td>`;
      }
    }
  }

  const total = `<tr>${emptyDates}` + `${fullDates}</tr>`;
  $tbody.innerHTML =
    total +
    `<tr>${fullDates2}</tr>` +
    `<tr>${fullDates3}</tr>` +
    `<tr>${fullDates4}</tr>` +
    `<tr>${fullDates5}</tr>`;
}
calendarDate();

function calendarStyle() {
  $style = document.createElement("style");
  document.head.appendChild($style);

  $style.innerHTML = `
  main {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
  
  th, td {
    width:50px;
    height:30px;
    border: 1px solid black;
    text-align: center;
  }
  
  td:hover {
    background-color: yellow;
  }`;
}
calendarStyle();
