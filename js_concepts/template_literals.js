// Template Literals ES6 부터 추가된 기능

function hello(name) {
    console.log("Hello "+name+". Welcome!");
}
hello("Ben");

// ``백틱안에서 ${} 사용히여 문자열 안에서 자바스크립트 문법을 사용할수 있다. 파라미터 또한 편하게(?) 받을수 있음.
function new_hello(name) {
    console.log(`Hello ${name}. Welcome!`);
}
new_hello("Ben");