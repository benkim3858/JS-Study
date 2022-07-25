// My solving
function solution(arr) {
    let answer = [];
    let odd = arr.filter(item => {
        return (item % 2) === 1
    })
    let sum = odd.reduce(function(a,b) {
        return a+b;
    })
    let min = Math.min(...odd);
    
    answer.push(sum);
    answer.push(min);

    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// Teacher solving
function solution(arr){
    let answer=[];
    let sum=0, min=Number.MAX_SAFE_INTEGER;
    for(let x of arr){
        if(x%2===1){
            sum+=x;
            if(x<min) min=x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

/*
    이 문제의 의의는 배열탐색이다.
    풀이를 보자면 for of 를 활용하여 배열 탐색 후 
    if문의 조건식으로 홀수(나눈 몫이 1)를 sum 변수에 누산하여 총 합을 저장하고,
    min 에는 최솟값을 저장한다.
    마지막으로 answer의 타입을 배열로 선언한 후 push를 하여 return을 통해 출력한다.
*/