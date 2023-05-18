// interface StringOnly {
//   name: string;
//   age: string;
//   location: string;
// }

// let user123: StringOnly = {
//   name: "kim",
//   age: "20",
//   location: "seoul",
// };

// 귀찮 ;;

interface StringOnly {
  [key: string]: string;
}

let user123: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

interface MyType123 {
  "font-size": MyType123 | number; // 안에 동일한게 많으면 이걸 사용 ㄱㄱ
}

let css: MyType123 = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// ===

interface objobj {
  [key: string]: string | number;
}

let obj: objobj = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// ==
interface obj2 {
  [key: string]: number | obj2;
  "font-size": number;
}

let obj2: obj2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
