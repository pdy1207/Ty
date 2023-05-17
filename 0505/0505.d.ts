type 함수타입 = (a: string) => number;
declare let 함수임니다: 함수타입;
type Members = {
    name: string;
    age: number;
    plusOne: (a: number) => number;
    changeName: () => void;
};
declare let 회원정보: Members;
