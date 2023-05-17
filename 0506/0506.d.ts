declare class Person123 {
    name: string;
    constructor(a: string);
    함수(a: number): void;
}
declare let 사람1: Person123;
declare class Test {
    name: any;
    age: any;
    constructor(a?: string);
}
declare class Test2 {
    add(숫자: any): void;
}
interface Square {
    color: String;
    width: number;
}
declare let 네모: Square;
type Animal2 = {
    name: string;
};
type Cat = {
    age: number;
} & Animal2;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
declare let 장바구니: Cart[];
interface Cart2 extends Cart {
    card: boolean;
}
declare let 장바구니2: Cart2[];
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 오브젝트2: MathObj;
