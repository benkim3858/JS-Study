// this 키워드

// 브라우저에서의 this는 window 객체를 의미한다.
// this는 기본적으로 window
console.log(this);

// 객체 메서드 a안의 this는 객체를 가리킨다. 
// 객체의 메서드를 호출할 때 this를 내부적으로 바꿔주기 떄문
const obj = {
    a: function() {
        console.log(this);
    },
}
obj.a();

// 이렇게 a2는 obj.a를 꺼내온 것이기 때문에 더이상 obj의 메서드가 아니므로 window 객체를 가리킴
const a2 = obj.a;
a2();