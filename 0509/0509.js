function 함수(parameter) {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
    }
}
//never 타입 등장하는 경우
// 1. 뭔가 이상한 narrowing
// 2. 어떤 함수 표현식은 return 타입이 자동으로 never
var 하암수 = function () {
    throw new Error();
};
