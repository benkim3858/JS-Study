const 끓는물 = 99;
if(끓는물 < 100) {
    console.log("물이 끓기 전 입니다.")
} else if(끓는물 > 100) {
    console.log("물이 끓고 있습니다.")
}

const d = new Date();
const day = d.getDay();
console.log(day);
let dayName = "";

switch (day) {
    case 0:
        dayName = "일요일";
        break;
    case 1:
        dayName = "월요일";
        break;
    case 2:
        dayName = "화요일";
        break;

    default: 
        dayName = "무슨 요일 일까요?"
        break;
}
console.log(dayName);
