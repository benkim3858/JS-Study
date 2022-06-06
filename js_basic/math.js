// round()
// 반올림, 반내림 정수
console.log(Math.round(4.6));
console.log(Math.round(4.4));

// ceil()
// 무조건 올림 정수 
console.log(Math.ceil(2.2));
// -> 게시판 페이징 처리할때 많이 사용
// 글 개수 72건 , 1페이지 보여지는 건수 15개 설정
// 5페이지가 나옴
console.log(Math.ceil(72/15));

// floor()
// 무조건 내림
console.log(Math.floor(9.9));
console.log(Math.floor(-4.9)); //-5

// trunc()
// 정수 부분만 리턴
console.log(Math.trunc(9.9));
console.log(Math.trunc(-4.9)); //-4

// sign()
// 음수이면 -1, 양수이면 1, 0이면 0
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));

// pow()
// 제곱
console.log(Math.pow(8,2));

// sqrt()
// 루트
console.log(Math.sqrt(64));

// abs()
// 무조건 양수로 변환
console.log(Math.abs(-4.7));

// max(), min()
// 가장 큰값, 작은값 찾아줌
console.log(Math.max(0,105,23,45,-28,77));
console.log(Math.min(0,105,23,45,-28,77));
console.log("============================");

// random()
// 0~1 사이의 숫자를 리턴
let x = Math.random(); 
console.log(x);
// 1~10 랜덤 숫자, 정수
x = Math.floor((Math.random() * 10) +1);
console.log(x);
// 1~100
x = Math.floor((Math.random() * 100) +1);
console.log(x);
// 6자리 랜덤 숫자 생성
x = Math.floor((Math.random() * 1000000));
console.log(x);