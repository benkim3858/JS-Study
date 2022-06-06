// window 객체
// console.log(window);

// alert()
alert("이것은 alert 창 입니다.");

// confirm()
// 확인, 취소 버튼이 불리언 값을 리턴함
let confirm = confirm("정말 삭제 하시겠습니까?");

// prompt()
// 사용자로부터 input박스를 통해 입력값을 받을수 있음
// 취소 버튼을 누르면 null 값을 리턴, 
let prompt = prompt("비밀번호를 입력하세요.");

// window.open()
// 해당 URL 주소로 이동
window.open("URL 주소");

// window.print()
// 프린트

// setTimeout()
// 지정된 시간 후 실행
setTimeout(function(){
    console.log("setTimeout 실행");
}, 5000);

// setInterval()
// 지정된 시간 마다 계속 반복되서 실행함
setInterval(function(){
    console.log("3초마다 프로그램 실행 - " + i);
    i++;
}, 3000);

// clearInterval()
// setInterval 함수를 멈출때 사용
