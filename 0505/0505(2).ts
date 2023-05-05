let 버튼 = document.querySelector("#button");
let 이미지 = document.querySelector("#image");
let 미친링크 = document.querySelectorAll(".naver");
버튼?.addEventListener("click", function () {
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});
미친링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "kakao.com";
  }
});

// 일반 for문
let 링크 = document.querySelectorAll(".naver");

for (let i = 0; i < 3; i++) {
  let a = 링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}
