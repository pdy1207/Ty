// class User123 {
//   name: string;
//   private familyName: string = "kim";
//   constructor(a) {
//     this.name = a + this.familyName;
//   }
//   이름변경함수() {
//     this.familyName = "park";
//   }
// }
// let 유저1 = new User("park");
// 유저1.이름변경함수();
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    return Persona;
}());
var 자식 = new Persona("kim");
console.log(자식); // kim
