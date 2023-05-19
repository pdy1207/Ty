type Age123<T> = T extends string ? string : unknown;
declare let a123: Age123<string>;
type 타입추출<T> = T extends (() => infer R)[] ? R : unknown;
type a = 타입추출<() => void>;
