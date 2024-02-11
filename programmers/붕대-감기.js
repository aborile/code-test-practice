/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137
 * 코딩테스트 연습 > PCCP 기출문제 > [PCCP 기출문제] 1번 / 붕대 감기
 */

function solution(bandage, health, attacks) {
  const [시전시간, 초당회복량, 추가회복량] = bandage;
  const 마지막공격시간 = attacks[attacks.length - 1][0];

  let 현재체력 = health;
  let 다음공격인덱스 = 0;
  let 연속성공시간 = 0;
  for (let time = 1; time <= 마지막공격시간; time++) {
    if (time === attacks[다음공격인덱스][0]) {
      연속성공시간 = 0;
      현재체력 -= attacks[다음공격인덱스][1];
      if (현재체력 <= 0) {
        return -1;
      }
      다음공격인덱스 += 1;
    } else {
      연속성공시간 += 1;
      let 회복된체력 = 현재체력 + 초당회복량;
      if (연속성공시간 === 시전시간) {
        회복된체력 += 추가회복량;
        연속성공시간 = 0;
      }
      현재체력 = Math.min(회복된체력, health);
    }
  }
  return 현재체력;
}
