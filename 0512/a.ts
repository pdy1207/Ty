export var 이름이에요 = "kim";
export var 나이에요 = 20;

export type Name = string;
export var 나이 = 20;

namespace 네임스페이스 {
  export type Nameing = string | number;
}

// +++

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}
