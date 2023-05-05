var 버튼 = document.querySelector("#button");
var 이미지 = document.querySelector("#image");
var 미친링크 = document.querySelectorAll(".naver");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "new.jpg";
    }
});
미친링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "kakao.com";
    }
});
// 일반 for문
var 링크 = document.querySelectorAll(".naver");
for (var i = 0; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
