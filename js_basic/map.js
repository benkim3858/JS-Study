// map 메소드는 배열 안의 요소들을 특정한 조건식, 혹은 함수를 통하여 얻은 결과를 새로운 배열로 반환한다.
const num = [1,2,3,4,5,6,7,8,9]

let 구구단 = num.map(item => item * 2);
console.log(구구단);

const arr = [{id:1,name:'ben'} , {id:2,name:'ben'} ,{id:3,name:'ben'}, {id:4,name:'ben'}];

let res = arr.map(item => {
    item.nick_name = item.id+item.name
    return item
})
console.log(res);

