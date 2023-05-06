var Person123 = /** @class */ (function () {
    function Person123(a) {
        this.name = a;
    }
    Person123.prototype.함수 = function (a) {
        console.log("넌 몇살이니?" + a);
    };
    return Person123;
}());
var 사람1 = new Person123("qewr");
// ==
// class Test {
//   name: string;
//   constructor() {
//     this.name = "kim";
//   }
// }
var Test = /** @class */ (function () {
    function Test(a) {
        if (a === void 0) { a = "kim"; }
        this.name = a;
        this.age = 20;
    }
    return Test;
}());
var Test2 = /** @class */ (function () {
    function Test2() {
    }
    Test2.prototype.add = function (숫자) {
        console.log(숫자 + 1);
    };
    return Test2;
}());
var 네모 = {
    color: "red",
    width: 100,
};
var 학생 = {
    name: "kim",
};
var 선생 = {
    name: "kim",
    age: 20,
};
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 장바구니2 = [{ product: "청소기", price: 7000, card: false }];
var 오브젝트2 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
// 함수타입은 ()=>{}
