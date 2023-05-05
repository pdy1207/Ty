// 근데 위에 있는걸 부착하려면 함수 표현식을 써야함!
var 함수임니다 = function () {
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 20,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(10);
