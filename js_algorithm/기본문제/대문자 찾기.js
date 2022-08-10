function solution(str) {
    let answer = 0;
    for(let x of str) {
        // console.log(x)
        if(x === x.toUpperCase()) {
            console.log(x);
            answer++;
        }
    }

    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

/*
    toUpperCase 문자열을 대문자로 변경해주는 함수
*/