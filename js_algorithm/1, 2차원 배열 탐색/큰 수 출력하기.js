function solution(arr,num) {
    answer = [];
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