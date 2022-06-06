// 조건의 시작점, for문의 종료점, 조건을 실행시킬 인자
for(let i=0; i<5; i++) {
    console.log("The number is " +i);
}

// break, continue 도 사용 가능
for(let i=0; i<5; i++) {
    if(i == 3) {
        break;
        // continue;
    }
    console.log("The number is " +i);
}

// 배열 탐색
const numbers = [1,10,100,1000];
const len = numbers.length;
for(let i=0; i<len; i++) {
    // 배열은 index로 접근하기 때문에 i라는 변수를 [i] 하면 동적으로 배열 탐색이 가능하다.
    console.log(numbers[i]);
}

// for in (배열,오브젝트 다 사용가능)
// numbers라는 배열을 i라는 변수에 차례대로 넣는다.
for(let i in numbers) {
    console.log(numbers[i]);
}

// for in 오브젝트 사용 방법
const person = {
    first_name: "Ben",
    last_name:"Kim",
    age: 28,
}
// 객체 접근 방법 [key]는 person 오브젝트의 키값들에 접근하며 string형식으로 가져온다.
for(let key in person) {
    console.log(person[key]);
}

// for of 인덱스가 아닌 배열의 값을 가져올때 사용
for(let num of numbers) {
    console.log(num);
}

// // while
// let i = 1;
// let total = 0; 
// while(i <= 10) {
//     total = total + i;
//     i++;
// }
// console.log(total);

// do while 첫 실행은 조건문 상관없이 무조건 실행된후 조건식에 걸린다.
let i = 11;
let total = 0; 
do {
    total = total + i;
    i++;
}
while(i <= 10);
console.log(total);

