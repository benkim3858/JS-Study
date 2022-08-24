function solution(arr) {
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i-1] < arr[i]) {
            answer++
        }
    }
    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));