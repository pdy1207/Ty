var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
function 함수2(animal) {
    if ("swim" in animal) {
        animal.swim;
    }
}
// in키워드로 objectnarrowing 가능 속성명 in 오브젝트자료
// instanceof 연산자로 object narrowing 가능
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수(x) {
    if (x.wheel == "4개") {
    }
}
// 비슷한 object 타입일 경우, literal type 강제로 만들어두면 나중에 도움됨
// object 타입마다 literal type 만들어두면 narrowing 편리하다!
