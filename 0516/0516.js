// let 멍멍:(string|boolean)[] = ['dog',true] 이것도 가능한데 위치까지 고려한 타입이 튜블타입
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog", true];
function 함수123() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수123(1111, "222");
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true); // 4,5, 1,2,3
// 이러한게 array합칠때 ...spread 연산자
// ==
var todayFood = ["제육볶음", 6000, true];
var todayFood2 = ["제육볶음", 6000, true];
var arr3 = ["동서녹차", 4000, true, false, true, true, false, true];
var arr4 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
function 함수테스트() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
함수테스트("a", true, 6, 3, "1", 4);
function 함수테스트2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === "string") {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
