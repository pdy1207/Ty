// let 멍멍:(string|boolean)[] = ['dog',true] 이것도 가능한데 위치까지 고려한 타입이 튜블타입

let 멍멍: [string, boolean] = ["dog", true];

function 함수123(...x: [number, string]) {
  console.log(x);
}
함수123(1111, "222");

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr]; // 4,5, 1,2,3

// 이러한게 array합칠때 ...spread 연산자

// ==

let todayFood = ["제육볶음", 6000, true];

let todayFood2: [string, number, boolean] = ["제육볶음", 6000, true];

let arr3 = ["동서녹차", 4000, true, false, true, true, false, true];

let arr4: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

function 함수테스트(...rest: [string, boolean, ...(number | string)[]]) {}

함수테스트("a", true, 6, 3, "1", 4);

function 함수테스트2(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}
