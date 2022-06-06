// date는 날짜 타입을 다루는 객체
// 컴퓨터에 지정된 로컬 date 기준으로 한다.

// new Date()
// month는 0부터 시작, day는 1부터 시작
let now = new Date();
console.log(now); // Mon Jun 06 2022 14:21:20 GMT+0900 (한국 표준시)

// getFullYear()
let year = now.getFullYear();
console.log("year", year);

// getMonth() month는 0부터 시작
let month = now.getMonth();
console.log("month", month+1);

// getDate() 날짜를 가지고 올때는 getDay가 아니라 getDate를 사용 해야 한다.
let date = now.getDate();
console.log("date", date);

// getDay() 요일을 가져올때, 일요일 0 부터 시작
let day = now.getDay();
console.log("day", day)

// 시, 분, 초
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();


// 타임존, 디비와 서버에 타임존 처리를 할때는 각 나라별 GMT 시간을 고려해서 처리해야한다.
console.log("timezone", now.getTimezoneOffset()); // 분단위로 나온다. -540 == -9시간

// 실무에서는 Date를 편하게 사용하기 위한 라이브러리를 사용한다.
// 대표적으로 moment.js