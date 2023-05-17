type Animal = {
    name: string;
    age: number;
};
declare let 동물: Animal;
declare const 출생지역: {
    region: string;
};
type Girlfriend = {
    name?: string;
};
declare const 여친: Girlfriend;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
declare let position: NewType;
type 만족하는타입 = {
    color?: string;
    size: number;
    position: number[];
};
declare let 테스트용변수: 만족하는타입;
type 만족하는타입2 = {
    name: string;
    phone: number;
    email?: string;
};
declare let 테스트용변수2: 만족하는타입2;
type 만족하는타입3 = {
    name: string;
    email?: string;
    phone: number;
};
type Adult = {
    adult: boolean;
};
type NewUser = 만족하는타입3 & Adult;
declare let 테스트용변수3: NewUser;
