function 내함수(x) {
    var array = [];
    array[0] = x;
}
내함수(123);
function 클리닝함수(a) {
    var 클리닝완료 = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            클리닝완료.push(parseInt(b));
        }
        else {
            클리닝완료.push(b);
        }
    });
}
console.log(클리닝함수([123, "3"]));
function 만들함수(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없스무리다.";
    }
}
console.log(만들함수({ subject: ["english", "art"] }));
