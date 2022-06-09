// 함수의 파라미터에 Default 값을 지정한는 방법

// 구 버전의 파라미터를 받는 메서드 정의 방법
// 이런식으로 undefined를 지정 해줘야 하는 불편함이 있었다.
// 특히 파라미터를 2개이상 받게 되면 각각 지정해줘야 했기때문에 더 불편했다
function say(message) {
    if(message != undefined) {
        console.log(message);
    } else {
        console.log("파라미터가 전달 되지 않아았어요");
    }
}

// ES6 - EcmaScript 6버전 이후 부터는 이런 undefined의 불편함을 해소하기 위해
// Default Parmeter를 지정할수 있게 되었다.
// 파라미터가 없을때만 디폴트 파라미터가 인수로 넘어감.
function say(message="파라미터 없음") {
    console.log(message);
}

say("Hello!");
say();

// 개별적으로 Default Parmeter를 지정할수도 있음
function plus(x, y=1){
    console.log(x+y);
}

plus(4,2);
plus(4);