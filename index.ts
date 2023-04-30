let y; // 변수만 만들면 자동 any타입 할당

function 함수입니다(x?: number): void {}

함수입니다(123);

// function 함수입니다2(x :number | string) : void {
//     console.log(x + 3)
// }
// 함수입니다2(2);

// ==

/* 
이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고

아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.

파라미터와 return 타입지정도 잘 해봅시다.  
*/

function 홍길동(name?: String): void {
  if (name) {
    console.log("안녕하세요" + name);
  } else {
    console.log("이름이 없스무리다?");
  }
}

/* 
함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.

숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.

숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
*/

function 자릿수세기(x: number | String): number {
  return x.toString().length;
}

/* 
    결혼 가능 확률을 알려주는 함수를 만들어봅시다.

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

 

(예시)

결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
*/

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
