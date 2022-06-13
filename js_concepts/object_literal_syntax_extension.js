// Object Literal Syntax Extension
// ES6 이후 추가됨
// 오브젝트의 키를 동적으로 할당할수 있게 해준다.

// 방법 1
let type = "student";
let score = {
    [type]: "Ben",
    score: 95,
}
console.log(score.student);

// 방법 2
let type2 = "grade";
score[type2] = 1;
console.log(score);