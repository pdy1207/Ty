let 이름: string = "kim";
let 이름2: string[] = ["kim", "park"];
let 이름3: { name?: string } = { name: "kim" }; // name 속성은 옵션이에요

let 나이: string | number = "20";

type MyType = string | number;
let 테스트: MyType = 123;

function 함수(x: number): number {
  return x * 2;
}
// 본 함수는 파라미터로 number, return 값으로 number

type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  [key: string]: String; // 글자로 된 모든 object 속성의 타입은 : string
};
let add: Member2 = { name: "kim" };

class User {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
}
