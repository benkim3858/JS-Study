const txt = "문자열 string"
// length 
// 문자열의 길이를 알려주는 메소드
console.log(txt.length);

// indexOf
// 특정 문자열의 시작index를 return 해준다. (여기서는 "문자를" 10)
const txt2 = "문자열 안에 특정 문자를 찾아주세요."
console.log(txt2.indexOf("문자를"));
// 맞는 문자가 없다면 -1을 retrun 해준다. 
// indexOf의 if문 사용 예시
if(txt2.indexOf("Ben") === -1) {
    console.log("특정 문자가 없습니다.");
}

// lastIndexOf
// indexOf와 같이 특정 문자열을 찾아주지만, 중복된 문자가 있다면 마지막에 찾은 문자의 index가 retrun된다.
console.log(txt2.lastIndexOf("문자"));

// search
// indexOf와 마찬가지로 특정 문자열의 Index를 리턴해준다.
console.log(txt2.search("문자를"));

// slice
// 문자열에서 내가 원하는 문자를 빼는것
// 인자 값으로는 원하는 문자열의 Index를 시작과 끝을 적어주면 된다. 
const txt3 = "Apple, Banana, Kiwi";
console.log(txt3.slice(7, 13));
console.log(txt3.slice(7)); // 종료 index를 적어주지 않으면 끝까지 다 가져온다
console.log(txt3.slice(-12, -6)); // 뒤에서부터도 가능

// substring 과 subStr
// substring은 slice와 유사하다. 
// 사용 예시는 어떤 문자열의 길이나 원하는 값을 명확하게 모를 때 indexOf와 같이 사용할수 있다.
const birth_day = "1988-05-05";
console.log(birth_day.substring(0,birth_day.indexOf("-")));
// substr은 특정 문자열 형식이 같을때, 알고있을때 사용하면 좋다.
// 인수로는 문자열 시작 index와 그 문자 뒤의 길이 값을 넣어주면 된다.
const birth_day2 = "880505";
console.log(birth_day2.substr(0,2));
console.log(birth_day2.substr(2,2));

// replace
// 특정 문자열을 바꾸고 싶은 문자열로 변경할때 사용할수 있다.
// 단, 중복된 문자가 있으면 첫번째 문자만 바뀜
// 그래서 정규식을 사용해서 다 바꿀수 있다 ex) /하세요/g
let str = "안녕하세요."
let str2 = str.replace("하세요","히가세요");
console.log(str2);

// toUpperCase , toLowerCase
// 문자열을 모두 대문자, 소문자로 바꿈
console.log(txt3.toUpperCase());
console.log(txt3.toLowerCase());

// concat
// 문자열에 문자열을 더할때 사용, 인자는 원하는데로 넣을수 있다. 적어준 순서대로 더해줌
let concat1 = "Hello";
let concat2 = "JavaScript!"
let concat3 = concat1.concat(" ",concat2);
console.log(concat3);

// trim
// 문자열 앞,뒤의 공백을 다 지워줌

// padStart
// 강제로 문자열을 만듬
// 예를들면 달력이나 시간을 맞춰야 할때, 특정 제품 번호를 생성할때
let day = "5";
console.log(day.padStart(2,0));
// padEnd
// 뒤에서 부터 문자열을 만듬

// charAt
// 특정 문자열의 문자 하나만 가지고 올떼
console.log(str.charAt(1));

// split
// 인수로 받은 특정 문자열을 기준으로 잘라서 배열로 반환한다.
// 사용 예시는 검색 기능에서 데이터베이스에 특정 태그들이 저장 되어 있다면 그 태그를 split 하여 배열로 반환 받을수 있다.
let tags = "키보드,기계식,블루투스,가성비";
let tags_arr = tags.split(",");
console.log(tags_arr);