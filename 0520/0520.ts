type Benz = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};
// 전부다 string으로 바꾸려면?

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<Benz>;
