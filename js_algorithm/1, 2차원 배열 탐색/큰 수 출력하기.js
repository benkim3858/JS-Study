function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for(let i=0; i<arr.length; i++) {
        // 자신의 바로 앞 수 보다 큰 수만 출력하기 위해 arr[i-1] 과 arr[i]를 비교
        if(arr[i-1] <= arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/*
function solution(arr,num) {
    let answer = [];
    arr.map(item=> {
        if(num <= item) {
            answer.push(item);
        }
    })

    return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
let num = arr.length;
console.log(solution(arr,num));

    문제를 잘못이해하고 풀었다. 문제 이해를 잘 하자.
*/