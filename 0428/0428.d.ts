declare let 이름: string;
declare let 이름2: string[];
declare let 이름3: {
    name?: string;
};
declare let 나이: string | number;
type MyType = string | number;
declare let 테스트: MyType;
type Member = [number, boolean];
declare let john: Member;
type Member2 = {
    [key: string]: String;
};
declare let add: Member2;
declare class User {
    name: String;
    constructor(name: String);
}
