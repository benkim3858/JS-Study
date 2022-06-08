// Rest Parameter 또한 ES6 부터 나왔다. 
// 함수를 정의하고 파라미터를 몇개를 받을지 모를때
// 파라미터를 유동적으로 받기 위해 사용한다.
function sum(...args) {
    let total = 0;
    // ... 은 파라미터가 배열로써 들어온다.
    // 그렇기 때문에 for of 사용 가능
    for(let x of args) {
        total += x;
    }
    // forEach도 사용가능
    // forEach안에 메서드 정의도 가능하다.
    // forEach안의 function의 파라미터는 배열이 forEach안에서 돌면서 하나씩 빼준다
    // 두번째 파라미터로 index를 주면 현재 파라미터 배열의 Index 번호도 알수 있다.
    args.forEach(function(x, index) {
        console.log(index);
        total += x;
    })


    console.log(total);
    return total;
}

// 파라미터가 몇개가 되든 상관없이 sum 함수가 실행
sum(1,2,3,4,5);
sum(1,2,3);
sum(1);