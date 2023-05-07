let person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수({ student: true, age: 20 });

// Narrowing 할 수 있는 방법 더 알아보기

type Fish = { swim: string };
type Bird = { fly: string };

function 함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}
// in키워드로 objectnarrowing 가능 속성명 in 오브젝트자료

// instanceof 연산자로 object narrowing 가능

let 날짜 = new Date();

if (날짜 instanceof Date) {
}

type Car = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Car | Bike) {
  if (x.wheel == "4개") {
  }
}
// 비슷한 object 타입일 경우, literal type 강제로 만들어두면 나중에 도움됨
// object 타입마다 literal type 만들어두면 narrowing 편리하다!
