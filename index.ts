let 접니다: "대머리" | "솔로";
접니다 = "대머리";

function 함수입니다(a: "hello"): 1 | 0 {
  return 1;
}
함수입니다("hello");

// Q. 가위 or 바위 or 보 중 1개 입력가능
// 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함

function 가위바위보(
  멀낼건가: "가위" | "바위" | "보"
): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
가위바위보("가위");

var 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}
내함수(자료.name);

// 1. object 만들 때 타입지정 확실히 하기.
// 2. as 문법으로 타입을 숨기기
// 3. as const 이상한 키워드 쓰기
// 3-1. object value 값을 그대로 타입으로 지정해줌
// 3-2. object 속성들에 모두 readonly 붙여줌 readonly라는건 마음대로 바꿀 수 없음!
// 3-3. object 자료를 완전히 잠가놓고 싶으면 as const 써보기!
