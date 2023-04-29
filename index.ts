let Name: String = "kim";
let Age: Number = 20;
let Marriage: Boolean = true;

let 회원들: String[] = ["kim", "park"];
let 회원들2: { member1: String; member2: Number } = {
  member1: "kim",
  member2: 1,
};

// ==

let 회원들3 = "park";

let usename: String = "park doyoung";
let age: Number = 26;
let region: String = "Daejeon";

let sing: { singer: String; title: String } = { singer: "IU", title: "좋은날" };

let project: { member: String[]; days: Number; started: Boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// == 문자 or 숫자 들어올 수 있는 변수는 ? 요러한걸 Union Type

let 축구: Number | String = 123;

let 배열: (Number | String)[] = [1, "2", 3];

let 오브젝트: { a: string | Number } = { a: "123" };

// any 타입 이건 쓰지마셈

let phone: any;

let 수학: String | Number;

// ==

let user: String = "kim";
let age2: undefined | number = undefined;
let married2: boolean = false;
let 철수: (String | Boolean | undefined | number)[] = [user, age2, married2];

let 학교: {
  score: (number | Boolean)[];
  teacher: String;
  friend: String | String[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
