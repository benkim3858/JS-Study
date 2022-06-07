// scope는 변수에 대한 접근성을 의미한다.

function myFunc() {
    const carName = "Hyundai";
    console.log(carName);
}
myFunc();
// 로컬 스코프
// 함수밖에서 carName을 참조 하려면 "ReferenceError: carName is not defined" 에러가 나온다.
// 함수밖에서는 함수안에 선언된 변수에 대한 접근성이 없는 로컬스코프이기 때문 
// console.log(carName);


// function 안에서는 펑션 밖에서 선언한 변수에 대해 접근이 가능하다.
const carName2 = "KIA";

// 이렇게 함수 호출이 먼저 작성 되어 있는데 왜 작동이 되는걸까?
// 자바스크립트는 function을 먼저 읽고 해석하기 때문이다. 그리고 나서 실행하는거라 에러가 안남
myFunc2();

function myFunc2() {
    console.log(carName2);
}

// 하지만 function을 변수에 담는 식으로 선언을 한다면 에러가 난다. (정말 이해할수 없는 자바스크립트...)
myFunc3();
const myFunc3 = function() {
    console.log(carName2);
}

