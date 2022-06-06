// 크롬 개발자 도구

// 다양한 console 정보
console.log("Hello!");
console.info("Hello!"); 
console.warn("Hello!"); // 경고
console.error("Hello!"); // 에러

// console.table()
// 배열을 보다 직관적이고 정리된 테이블로 보고싶을때 사용
let members = [
    {name:"유재석", point: 78},
    {name:"김종국", point: 92},
    {name:"양세찬", point: 76},
    {name:"하하", point: 81},
]
console.table(members);

// console.time() , console.timeEnd()
// 해당 메서드 혹은 코드의 퍼포먼스 측정을 위한 시간측정

