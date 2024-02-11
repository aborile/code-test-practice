/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181187
 * 코딩테스트 연습 > 연습문제 > 두 원 사이의 정수 쌍
 */

function solution(r1, r2) {
  const 축위의점 = (r2 - r1 + 1) * 4;
  const r1경계 = r1 * r1;
  const r2경계 = r2 * r2;

  let 제1사분면 = 0;
  for (let x = 1; x <= r2; x++) {
    if (x < r1) {
      const y1 = Math.ceil(Math.sqrt(r1경계 - x * x));
      const y2 = Math.floor(Math.sqrt(r2경계 - x * x));
      제1사분면 += y2 - y1 + 1;
    } else {
      const y2 = Math.floor(Math.sqrt(r2경계 - x * x));
      제1사분면 += y2;
    }
  }
  return 축위의점 + 제1사분면 * 4;
}
