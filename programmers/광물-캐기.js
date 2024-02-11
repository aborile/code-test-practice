/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172927
 * 코딩테스트 연습 > 연습문제 > 광물 캐기
 */

const 피로도가중치 = { diamond: 100, iron: 10, stone: 1 };

function solution(picks, minerals) {
  const [다이아곡괭이수, 철곡괭이수, 돌곡괭이수] = picks;
  const 곡괭이수 = 다이아곡괭이수 + 철곡괭이수 + 돌곡괭이수;
  const 피로도가중치점수 = [];
  for (let i = 0; i < 곡괭이수; i++) {
    let 피로도 = 0;
    if (i * 5 >= minerals.length) break;
    for (let j = 0; j < 5; j++) {
      const index = i * 5 + j;
      if (index >= minerals.length) break;
      피로도 += 피로도가중치[minerals[index]];
    }
    피로도가중치점수.push(피로도);
  }

  피로도가중치점수.sort((a, b) => b - a);
  var answer = 0;
  let 남은다이아곡괭이수 = 다이아곡괭이수;
  let 남은철곡괭이수 = 철곡괭이수;
  let 남은돌곡괭이수 = 돌곡괭이수;
  피로도가중치점수.forEach((피로도) => {
    const 다이아개수 = Math.floor(피로도 / 100);
    const 철개수 = Math.floor((피로도 % 100) / 10);
    const 돌개수 = 피로도 % 10;

    if (남은다이아곡괭이수 > 0) {
      남은다이아곡괭이수 -= 1;
      answer += 다이아개수 + 철개수 + 돌개수;
    } else if (남은철곡괭이수 > 0) {
      남은철곡괭이수 -= 1;
      answer += 다이아개수 * 5 + 철개수 + 돌개수;
    } else {
      남은돌곡괭이수 -= 1;
      answer += 다이아개수 * 25 + 철개수 * 5 + 돌개수;
    }
  });
  return answer;
}
