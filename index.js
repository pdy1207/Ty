// var nunu = {
//   q: "consume",
//   w: "snowball",
// };

// var garen = {
//   q: "strike",
//   w: "courage",
// };

function 기계(a, b) {
  this.q = a;
  this.w = b;
}
기계.prototype.name = "kim";

var nunu = new 기계("consume", "snowball");
var garen = new 기계("strike", "courage");

// ES 6 문법임

class Hero {
  constructor(a, b) {
    this.q = a;
    this.w = b;
  }
}

// Q. array자료에 .sort() 붙일 수 있는 이유는?

var 어레이 = [4, 2, 1];

var 어레이 = new Array(4, 2, 1);
어레이.sort();
// Array.prototype <- 여기에 있기 때문에
