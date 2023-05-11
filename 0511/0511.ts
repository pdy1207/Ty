class TestUser {
  static skill = "js";
  intro = TestUser.skill + " 전문가입니다.";
}

let 철수임 = new TestUser();
console.log(철수임);

TestUser.skill = "ts";

let 철수임2 = new TestUser();
console.log(철수임2); // ts 전문가입니다.
