function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i-1] < arr[i]) {
            console.log(arr[i-1])
            console.log(arr[i]);
            answer.push(i+1)
        } else {
            answer.push(i+2)
        }
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76]; // 4 3 2 1 5
console.log(solution(arr));