function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((acc, cur) => acc + cur, 0);

    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++) {
            if((sum-(arr[i]+arr[j])) === 100) {
                arr.splice(j,1);
                arr.splice(i,1);
            }
        }
    }

    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/*
    이번 문제는 2중 for문을 이용하여 배열을 탐색하는것이 포인트다.
*/