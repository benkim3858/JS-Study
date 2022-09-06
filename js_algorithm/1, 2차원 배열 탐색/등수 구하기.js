function solution(arr) {
    const n = arr.length;
    let answer = Array.from({length:n}, () => 1);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j <n; j++) {
            if(arr[i] < arr[j]) {
                answer[i]++;
            }
        }
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76]; // 4 3 2 1 5
console.log(solution(arr));