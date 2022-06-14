// Array Destructuring
// 배열 구조분해 할당

// 배열을 가져오는 함수
function get_scores() {
    return [70,80,90];
}
// 가져온 배열을 새로 선언한 배열 객체에 분해 하여 할당
const [score_A, score_B] = get_scores();
console.log(score_A);
