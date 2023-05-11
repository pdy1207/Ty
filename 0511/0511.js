var TestUser = /** @class */ (function () {
    function TestUser() {
        this.intro = TestUser.skill + " 전문가입니다.";
    }
    TestUser.skill = "js";
    return TestUser;
}());
var 철수임 = new TestUser();
console.log(철수임);
TestUser.skill = "ts";
var 철수임2 = new TestUser();
console.log(철수임2); // ts 전문가입니다.
