/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/178871
 * 코딩테스트 연습 > 연습문제 > 달리기 경주
 */

function solution(players, callings) {
  const ranks = players.slice();
  const indexMap = new Map();
  callings.forEach((p) => {
    const index = indexMap.get(p);
    const rank = index ?? ranks.findIndex((r) => r === p);
    ranks[rank] = ranks[rank - 1];
    indexMap.set(ranks[rank - 1], rank);
    ranks[rank - 1] = p;
    indexMap.set(p, rank - 1);
  });
  return ranks;
}
