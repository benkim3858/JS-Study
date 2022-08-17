function solution(str) {
    let answer;
    if(str.length % 2 === 1) {
        let num = str.length / 2;
        for(let x=0; x<=num; x++) {
            answer = str.slice(x,-x);
        }
    } else if(str.length % 2 === 0) {
        let num2 = (str.length / 2) -1;
        for(let x=0; x<=num2; x++) {
            answer = str.slice(x,-x);
        }
    }

    return answer;
}

console.log(solution('length'));