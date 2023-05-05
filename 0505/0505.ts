type 함수타입 = (a: string) => number; //문자타입만 넣어야하고 무조권 넘버타입을 배출

// 근데 위에 있는걸 부착하려면 함수 표현식을 써야함!
let 함수임니다: 함수타입 = function () {
  return 10;
};

type Members = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: Members = {
  name: "kim",
  age: 20,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(10);
