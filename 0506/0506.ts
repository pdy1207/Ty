class Person123 {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: number) {
    console.log("넌 몇살이니?" + a);
  }
}
let 사람1 = new Person123("qewr");

// ==

// class Test {
//   name: string;
//   constructor() {
//     this.name = "kim";
//   }
// }

class Test {
  name;
  age;
  constructor(a = "kim") {
    this.name = a;
    this.age = 20;
  }
}

class Test2 {
  add(숫자): void {
    console.log(숫자 + 1);
  }
}

// ==

// type Square = {
//   color: String;
//   width: number;
// };

interface Square {
  color: String;
  width: number;
}

let 네모: Square = {
  color: "red",
  width: 100,
};

type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = {
  name: "kim",
};

let 선생: Teacher = {
  name: "kim",
  age: 20,
};

// ==
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
interface Cart2 extends Cart {
  card: boolean;
}
let 장바구니2: Cart2[] = [{ product: "청소기", price: 7000, card: false }];

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 오브젝트2: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
// 함수타입은 ()=>{}
