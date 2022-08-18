function solution(str) {
    let answer = [];
   
    for(let i=0; i<str.length; i++) {
        if(i === str.indexOf(str[i])) {
            answer.push(str[i]);
        } 
    }

    return answer;
}

let str = ['good','time','good','time','study'];
console.log(solution(str));

// teacher
// function solution(str) {
//     let answer;
    
//     answer = str.filter(function(value, index){
//         return str.indexOf(value) === index;
//     });

//     return answer;
// }

// let str = ['good','time','good','time','study'];
// console.log(solution(str));


/*
    배열 메서드의 filter를 사용하여 value, index의 값을 가지고 indexOf 메서드를 사용하였다.
    filter는 리턴되는 값이 true일때 새로운 배열을 생성한다.
    따라서 str.indexOf(value)와 filter의 index를 비교했을때 true인 요소들이 새 배열을 생성하며 리턴된다. 
*/