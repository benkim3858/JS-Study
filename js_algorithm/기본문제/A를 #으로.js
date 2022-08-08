// My solving
function solution(str1) {
    let answer = str1.replace(/A/g,'#');
    
    return answer;
}

let str1 = "BANANA";
console.log(solution(str1));

// Teacher solving
function solution(str2) {
    let answer = "";
    for(let x of str2) {
        if(x==='A') answer+='#';
        else answer+=x;
    }
    return answer;
}

let str2 = "BANANA";
console.log(solution(str2));

/*
    for of 를 사용하여 문자열 탐색도 가능하다. (콘솔 찍어보면 문자 하나씩 나오는것을 볼수 있음)
    순차적 탐색에 조건식을 사용하여 문자를 변환 해줌
    String은 이뮤터블, 원시값이다. 얕은 복사에 의해 값이 변하지 않음
    replace 함수는 문자열의 특정 문자를 변환해주는 자바스크립트 메서드이다. 
    정규식 g (글로벌) 속성을 사용해 #으로 변환 하였다. 
 */