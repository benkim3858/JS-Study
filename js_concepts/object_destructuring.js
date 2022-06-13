// Object Destructuring
// ES6
// 구조 분해 할당, 디스트럭처링(Destructuring)은 구조화된 배열 또는 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는 것이다.
// 받아온 객체의 키만을 받아서 필요한 키만 사용할수 있는 표현식

function get_person() {
    return {
        name: "Ben",
        age: 28,
        email: "Ben@gmail.com",
        city: "Bikini City",
        country: "Under the Sea",
    };
}

let {name, city} = get_person();
console.log(name);
console.log(city);