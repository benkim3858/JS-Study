function solution(str) {
    let answer = '';
    for (let x of str) {
        if(x.length > str.length) {
            answer = x;
        }
    }

    return answer;
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));