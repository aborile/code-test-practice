/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/176962
 * 코딩테스트 연습 > 연습문제 > 과제 진행하기
 */

function solution(plans) {
  plans.sort((a, b) => (a[1] < b[1] ? -1 : 1));
  const stopped = [];
  const completed = [];

  // 과제 수행
  plans.forEach(([name, start, playtime], index) => {
    // 마지막 과제일 경우
    if (index === plans.length - 1) {
      completed.push(name);
    }
    // 마지막 과제가 아닐 경우
    else {
      const [, nextStart] = plans[index + 1];
      const [현재과제_시작시각, 현재과제_시작분] = start.split(":");
      const [다음과제_시작시각, 다음과제_시작분] = nextStart.split(":");
      const 다음과제까지남은시간 =
        Number(다음과제_시작시각) * 60 +
        Number(다음과제_시작분) -
        (Number(현재과제_시작시각) * 60 + Number(현재과제_시작분));
      const 과제소요시간 = Number(playtime);
      if (과제소요시간 <= 다음과제까지남은시간) {
        // 현재 과제 완료
        completed.push(name);
        // 남은 시간 동안 멈춰둔 과제 수행
        let 여유시간 = 다음과제까지남은시간 - 과제소요시간;
        while (여유시간 > 0 && stopped.length > 0) {
          const [최근과제, 소요시간] = stopped.pop();
          if (소요시간 <= 여유시간) {
            completed.push(최근과제);
            여유시간 -= 소요시간;
          } else {
            stopped.push([최근과제, 소요시간 - 여유시간]);
            여유시간 = 0;
          }
        }
      } else {
        // 현재 과제 미완료
        stopped.push([name, 과제소요시간 - 다음과제까지남은시간]);
      }
    }
  });
  // 멈춰둔 과제를 모두 진행
  for (let i = 0; i < stopped.length; i++) {
    completed.push(stopped[stopped.length - 1 - i][0]);
  }
  return completed;
}
