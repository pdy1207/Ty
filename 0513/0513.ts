interface LengthCheck {
  length: number;
}

function 함수<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}
let a = 함수<number>(100);
