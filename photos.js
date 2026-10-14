// 사진 경로를 한 곳에서 관리합니다. 교회 실제 사진으로 바꾸려면 img/ 폴더에 넣고 아래 경로만 수정하세요.
window.PHOTOS = {
  hero:     "img/hero.jpg",      // 홈 상단 큰 사진 (Unsplash 임시)
  worship:  "img/worship.jpg",   // 참된 예배자
  mission:  "img/mission.jpg",   // 선교 사명
  leader:   "img/leader.jpg",    // 영적 리더 훈련
  together: "img/together.jpg",  // 평신도 동역
  logo:     "img/logo.png",
  map:      "img/map.svg"
};
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-photo]").forEach(el => {
    const src = PHOTOS[el.dataset.photo];
    if (el.tagName === "IMG") el.src = src; else el.style.backgroundImage = `url('${src}')`;
  });
});
