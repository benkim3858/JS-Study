// 첫번째 방법
let person = {};
person.first_name = "동현";
person.last_name = "김";
console.log(person);

// 두번째 방법
let person2 = {
    first_name: "Ben",
    last_name: "Kim",
}
console.log(person2);

// 세번째 방법
let person3 = {};
person3["Korea_name"] = "김동현"
person3["Engilsh_name"] = "Ben Kim"
console.log(person3);

// 키(Key) 와 값(Value)로 구성 되어 있다.
const superman = {
	name : 'Ben',
	age : 33,
}

// superman에 address 객체 추가하기
superman.address = {
 "도로명" : "수영로",
 "상세주소" : "부산아파트",
 "우편 번호 ": 123,
}

// superman에 arr 이라는 배열 객체 추가하기
superman.arr = [1,2,3,4,5]

// superman에 mat이라는 익명함수 객체 추가하기
superman.mat = function(a) {
	console.log(a)
}

// superman에 있는 mat 함수 실행 하기
// 실행 하면 address가 콘솔로그로 나온다. 파라미터로 넘겨주기 때문
superman.mat(superman.address);

// 함수 정의
function fly() {
	console.log('fly');
	return 1
}

// superman에 fly 라는 정의된 함수를 추가해준다.
superman.fly = fly
superman.fly() // 실행 결과값은 1

// 배열 객체
let arr1 = ["배열0","배열1","배열2"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);