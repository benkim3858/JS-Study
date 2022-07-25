// // My solving
let arr = [5,7,1,3,2,9,11];
function solution(arr) {
    let answer = arr.sort((a,b)=> a - b).shift();
    return answer;
}
solution(arr);
console.log(solution(arr))

// Teacher solving
let t_arr = [5,7,1,3,2,9,11];
function solution(t_arr) {
    let t_answer = Math.min(...t_arr);
    return t_answer;
}
solution(t_arr);
console.log(solution(t_arr))