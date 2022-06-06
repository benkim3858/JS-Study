// toString()
// 배열안에 있는 문자를 쉼표를 기준으로 하나의 문자열로 만듬
let fruits = ["Banana", "Orange", "Apple"];
console.log(fruits);
console.log(fruits.toString());

// join()
// 배열안에 요소들을 join()의 인수를 더하여 하나의 문자열로 만든다.
console.log(fruits.join("|"));

// pop()
// 배열의 가장 마지막 element를 제거, pop() 하면, 제거된 element를 리턴 한다.
let arr = fruits.pop();
console.log(arr);
console.log(fruits);

// push()
// 배열의 마지막에 새 element를 추가
fruits.push("kiwi");
console.log(fruits);

// shift()
// 배열의 첫번째 element 제거 함, shift()는 리턴으로 제거된 element를 리턴 한다.
arr = fruits.shift();
console.log(arr);
console.log(fruits);

// unshift()
// 배열의 첫번째에 새 element를 추가
fruits.unshift("Lemon");
console.log(fruits);

// 인덱스 번호를 가지고 값을 핸들링 할수도 있다.
fruits[0] = "Banana";
console.log(fruits);

// 인덱스의 마지막 번호에 element를 핸들링 하는 방법
// fruits의 length를 하면 1,2,3이 나오는데 배열의 인덱스는 0,1,2이다. 
// 따라서 length의 -1을 하면 인덱스의 마지막 요소에 값을 핸들링 할수 있게 된다.
console.log(fruits.length);
fruits[fruits.length-1] = "Lemon";
console.log(fruits);

console.log("====================================");

// splice()
// 배열의 요소를 추가,삭제 하고 싶을때 사용
// 첫번쨰 파라미터 -> 시작위치 , 두번쨰 -> 삭제할 element 갯수, 세번째부터는 -> 그 요소를 넣겠다는 것
fruits.splice(0,0,"Apple","Kiwi");
console.log(fruits);

// slice()
// 배열의 특정 요소를 가져올때 사용 , 두번째 인자값에 아무것도 적지않으면 배열의 끝까지 다 가져옴
let fruit1 = fruits.slice(1,2);
console.log(fruit1);

console.log("====================================");

// sort() 정렬하다. 
console.log(fruits.sort()); // -> 문자열 우선으로 정렬함
// 그렇기 때문에 함수에 조건을 넣어 정렬할수 있다.
let points = [40, 100, 70, 21, 99]; 
points.sort(function(a,b){
    return a-b; // 오름차순
});
console.log(points);

// reverse()
// 배열의 저장된 요소들을 반대로 만드는것
points.reverse();
console.log(points);

console.log("====================================");

// concat()
// 배열들을 합칠때 사용
let alpaA = ["A"];
let alpaB = ["B"];
let alpaC = ["C"];
const alpa = alpaA.concat(alpaB,alpaC);
console.log(alpa);

console.log("====================================");

// filter()
// 조건에 맞는 배열만 리턴 해줌
let members = [
    {name:"유재석", point: 78},
    {name:"김종국", point: 92},
    {name:"양세찬", point: 76},
    {name:"하하", point: 81},
]
let pass = members.filter(function(members){
    return members.point > 80;
});
console.log(pass);

console.log("====================================");

// reduce
// 4개의 파라미터를 가질수 있다. 
// 첫번째 파라미터(a) : accumulator(a) 누산기, 리턴을 해서 받은 반환값을 누산기에 계속 누적이 됨
// 두번째 파라미터(c) : currentValue (c), 배열을 읽으면서 현재값을 가져오는것
// 세번째 파라미터(i) : index(i) , currentValue의 인덱스가 들어옴
// 네번째 파라미터(arr) : array(arr) , 전체 배열을 리턴
let numbers = [1,2,3,4,5];
const total = numbers.reduce(function(a,c,i,arr){
    return a+c;
});
console.log(total);

console.log("====================================");

// map
// 새로운 배열로 리턴 하고싶을때 사용
let members_name = [
    {first_name:"재석", last_name:"유"},
    {first_name:"종국", last_name:"김"},
    {first_name:"석진", last_name:"지"},
    {first_name:"동훈", last_name:"하"},
]
let members_full_name = members_name.map(function(member){
    return {full_name: member.last_name + member.first_name}
});
console.log(members_full_name);

