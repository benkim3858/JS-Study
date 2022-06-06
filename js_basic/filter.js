// filter는 조건식을 거쳐 새 배열을 반환한다.
const num = [1,2,3,4,5,6,7,8,9,10];

let odd_num = num.filter(item => item % 2 === 1);
console.log(odd_num);
//[ 1, 3, 5, 7, 9 ]