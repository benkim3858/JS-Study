// toString()
// 숫자를 문자열로 변환
let x = 123;
console.log(x.toString());

// toFixed()
// 지정된 소수점 자리수까지 반올림으로 표기

// Number()
let y = Number("10"); // 숫자10으로 형변환
let z = Number(true); // true는 1을 리턴
let a = Number(false); // false는 0을 리턴
console.log(Number(" 10 ")); // 앞뒤로 공백이 있어도 공백을 제외하고 숫자만 리턴 
console.log(Number("10,33")); // NaN을 리턴 - Not a Number 숫자가 아니다.

// parseInt()
console.log(parseInt("3.9")); // 소수점 이하는 버리고 정수만 리턴
console.log(parseInt("12 years")); // 문자열과 같이 있을경우 숫자만 리턴

// parseFloat()
// 소수점 까지 리턴
console.log(parseFloat(13.9));
