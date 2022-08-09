function solution(str, t) {
    let answer = 0;
    for(let x of str) {
        if(x === t) {
            answer++
        }
    }
    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

/*
    for of 탐색 및 문자열 내장 함수 split을 사용할수 있다.
*/