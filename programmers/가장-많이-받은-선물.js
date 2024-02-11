/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258712
 * 코딩테스트 연습 > 2024 KAKAO WINTER INTERNSHIP > 가장 많이 받은 선물
 */

function solution(friends, gifts) {
  const giftMap = new Map(); // 선물 내역 Map (주고받은이:횟수)
  const giftScore = new Map(); // 선물 지수 Map (이름:점수)
  // 전체 목록 초기화
  friends.forEach((friend) => {
    giftScore.set(friend, 0);
    const others = friends.filter((f) => f !== friend);
    others.forEach((other) => {
      giftMap.set(`${friend} ${other}`, 0);
    });
  });
  // 선물 주고 받은 내역 정리
  gifts.forEach((gift) => {
    giftMap.set(gift, giftMap.get(gift) + 1);

    const [giver, receiver] = gift.split(" ");
    giftScore.set(giver, giftScore.get(giver) + 1);
    giftScore.set(receiver, giftScore.get(receiver) - 1);
  });

  let maxGifts = 0;
  // 각 친구 별 선물 정산
  friends.forEach((friend) => {
    const others = friends.filter((f) => f !== friend);
    let newGiftCount = 0;
    // 본인 이외의 모든 친구에 대해 확인
    others.forEach((other) => {
      // 해당 친구에게 준 횟수
      const gived = giftMap.get(`${friend} ${other}`);
      // 해당 친구에게 받은 횟수
      const received = giftMap.get(`${other} ${friend}`);
      if (gived > received) newGiftCount += 1;
      else if (gived === received) {
        const myScore = giftScore.get(friend);
        const otherScore = giftScore.get(other);
        if (myScore > otherScore) newGiftCount += 1;
      }
    });
    if (newGiftCount > maxGifts) maxGifts = newGiftCount;
  });
  return maxGifts;
}
