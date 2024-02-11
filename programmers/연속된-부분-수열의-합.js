/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178870
 * 코딩테스트 연습 > 연습문제 > 연속된 부분 수열의 합
 */

function solution(sequence, k) {
  let sum = 0;
  let lastIndex = sequence.length - 1;
  let firstIndex = 0;
  for (var i = sequence.length - 1; i >= 0; i--) {
    sum += sequence[i];
    firstIndex = i;
    if (sum === k) break;
    else if (sum > k) {
      sum -= sequence[lastIndex];
      lastIndex -= 1;
    }
  }
  if (sequence[firstIndex] === sequence[lastIndex]) {
    const index = sequence.findIndex((s) => s === sequence[firstIndex]);
    return [index, index + lastIndex - firstIndex];
  }
  return [firstIndex, lastIndex];
}
