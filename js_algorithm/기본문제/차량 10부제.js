// My solving
function solution(day,arr) {
    let answer = arr.filter(item => item % 10 === day);
    
    return answer.length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// Teacher solving
function solution(day, arr){
    let answer=0;
    for(let x of arr){
        if(x%10==day) answer++;
    }
    
    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

/*
   배열탐색
   십진수의 수를 10으로 나누면 , 나머지는 항상 일의 자리 숫자가 된다.
*/