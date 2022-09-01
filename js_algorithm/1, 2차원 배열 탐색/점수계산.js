function solution(arr) {
    let answer = 0;
    let cnt = 0;
    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i] === 1) {
    //         cnt++;
    //         answer += cnt;
    //     } else if(arr[i] === 0) {
    //         cnt = 0;
    //     }
    //     // answer = cnt;
    //     console.log(cnt,"@@@@@@@")
    // }

    for (let key in arr) {
        if (arr[key] === 1) {
            cnt++;
            answer += cnt;
        } else if(arr[key] === 0) {
            cnt = 0;
        }
    }

    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// score = 1 + 1 + 2 + 3 + 1 + 2 (10)
console.log(solution(arr));
