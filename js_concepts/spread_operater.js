// Spread Operater
// 전개 구문, 자유롭게 객체를 펼칠수 있어 유용한 점이 많다.
// 반복 가능한 객체에 적용할수 있는 문법이다.
// 배열이나 문자열 등을 아래처럼 풀어서 요소 하나로 전개 시킬수 있음
// 사용 예제는 배열 각각의 엘리먼트를 인자로 넘기고 싶을때 사용 하면 좋다.

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [1,2,3,...arr2];
let arr4 = [...arr1,...arr2];
console.log(arr3);

let cd = "CD";
let arr5 = ["A","B",...cd];
console.log(arr5); // 문자열도 풀어서 나옴