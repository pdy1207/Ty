var Name = "kim";
var Age = 20;
var Marriage = true;
var 회원들 = ["kim", "park"];
var 회원들2 = {
    member1: "kim",
    member2: 1,
};
// ==
var 회원들3 = "park";
var usename = "park doyoung";
var age = 26;
var region = "Daejeon";
var sing = { singer: "IU", title: "좋은날" };
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// == 문자 or 숫자 들어올 수 있는 변수는 ? 요러한걸 Union Type
var 축구 = 123;
var 배열 = [1, "2", 3];
var 오브젝트 = { a: "123" };
// any 타입 이건 쓰지마셈
var phone;
var 수학;
// ==
var user = "kim";
var age2 = undefined;
var married2 = false;
var 철수 = [user, age2, married2];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
