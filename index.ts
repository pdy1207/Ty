// type alias 만드는 법

type Animal = { name: string; age: number };
let 동물: Animal = { name: "kim", age: 20 };

const 출생지역 = { region: "seoul" };

출생지역.region = "busan";

// 이거를 못 바꾸게 막을 수 있음!

type Girlfriend = {
  //  readonly name: string;
  //실수로 수정하면 에러발생!
  // 단, 에러는 에디터 & 터미널에서만 존재...
  name?: string; // ===  string | undefind
};

const 여친: Girlfriend = {
  name: "엠버",
};

// 타입 합치기

type Name = string;
type Age = number;

type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;
// extend 한다 이말임 Type alias & { name : string } 이런 것도 가능

let position: NewType = { x: 10, y: 20 };

// ===

type 만족하는타입 = { color?: string; size: number; position: number[] };
let 테스트용변수: 만족하는타입 = {
  size: 123,
  position: [1, 2, 3],
};

type 만족하는타입2 = { name: string; phone: number; email?: string };

let 테스트용변수2: 만족하는타입2 = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
};

type 만족하는타입3 = {
  name: string;
  email?: string;
  phone: number;
};
type Adult = { adult: boolean };

type NewUser = 만족하는타입3 & Adult;

let 테스트용변수3: NewUser = {
  name: "park",
  email: "bbb@naver.com",
  phone: 4444,
  adult: true,
};
