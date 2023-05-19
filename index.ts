type Age123<T> = T extends string ? string : unknown;
let a123: Age123<string>;

// 함수를 넣으면 함수의 return 타입만 뽑고싶다

type 타입추출<T> = T extends (() => infer R)[] ? R : unknown;

type a = 타입추출<() => void>;
