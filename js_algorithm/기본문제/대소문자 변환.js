function solution(str) {
    let answer = '';

    for(let x of str) {
        if(x === x.toUpperCase()){
            answer += x.toLowerCase();
        } else if(x === x.toLowerCase()) {
            answer += x.toUpperCase();
        }
    }
    return answer;
}

let str = 'StuDY';
console.log(solution(str));

/*
    +=
*/