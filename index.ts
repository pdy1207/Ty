function 내함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
내함수(123);

function 클리닝함수(a: (number | string)[]) {
  let 클리닝완료: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      클리닝완료.push(parseInt(b));
    } else {
      클리닝완료.push(b);
    }
  });
}
console.log(클리닝함수([123, "3"]));

function 만들함수(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없스무리다.";
  }
}
console.log(만들함수({ subject: ["english", "art"] }));
