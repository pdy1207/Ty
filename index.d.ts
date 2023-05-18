interface StringOnly {
    [key: string]: string;
}
declare let user123: StringOnly;
interface MyType123 {
    "font-size": MyType123 | number;
}
declare let css: MyType123;
interface objobj {
    [key: string]: string | number;
}
declare let obj: objobj;
interface obj2 {
    [key: string]: number | obj2;
    "font-size": number;
}
declare let obj2: obj2;
