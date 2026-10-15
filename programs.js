// 사역 프로그램 데이터 — 내용과 사진을 여기서만 고치면 됩니다.
// 사진: img/programs/ 폴더의 임시 Pexels 무료 사진. 교회 사진으로 바꿀 때 경로만 수정하세요.
// '// 확인 필요' 표시는 주보에 없는 내용이라 일반적인 안내 문구로 작성한 것입니다. 교회에서 확인 후 수정해 주세요.
window.MINISTRIES = {
  m1: { name: "참된 예배자가 되는 교회", verse: "요한복음 4:23-24" },   // 주보 출처
  m2: { name: "선교 사명을 감당하는 교회", verse: "마태복음 28:18-20" }, // 주보 출처
  m3: { name: "영적 리더를 훈련하는 교회", verse: "디모데후서 2:1-2" },  // 주보 출처
  m4: { name: "평신도들과 동역하는 교회", verse: "에베소서 4:11-12" }    // 주보 출처
};
window.PROGRAMS = {
  "worship-school": { title: "예배자 학교", ministry: "m1", // 이름: 주보 출처
    photos: ["img/programs/worship-school-1.jpg","img/programs/worship-school-2.jpg","img/programs/worship-school-3.jpg"],
    desc: "영과 진리로 하나님께 예배드리는 참된 예배자로 함께 자라 가는 배움의 자리입니다. 예배의 의미와 자세를 말씀 안에서 배웁니다.", // 확인 필요
    note: "10월 4일 주요 행사로 ‘예배자-임직자 교육’이 있었습니다. (주보 10월 예배위원표)" }, // 주보 출처
  "praise-leader": { title: "찬양 인도자 교육", ministry: "m1",
    photos: ["img/programs/praise-leader-1.jpg","img/programs/praise-leader-2.jpg","img/programs/praise-leader-3.jpg"],
    desc: "찬양으로 예배를 섬기는 인도자를 세웁니다. 찬양의 은혜를 나누고 회중을 하나님께로 이끄는 섬김을 배웁니다." }, // 확인 필요
  "beniel": { title: "브니엘 찬양단", ministry: "m1", // 확인 필요 (주보 사역 목록에는 없음, 기존 앱 태그)
    photos: ["img/programs/beniel-1.jpg","img/programs/beniel-2.jpg","img/programs/beniel-3.jpg"],
    desc: "기쁨으로 찬양하며 예배를 섬기는 찬양단입니다. 찬양을 사랑하는 분이라면 누구나 함께하실 수 있습니다." }, // 확인 필요
  "obyeongieo": { title: "오병이어", ministry: "m2",
    photos: ["img/programs/obyeongieo-1.jpg","img/programs/obyeongieo-2.jpg","img/programs/obyeongieo-3.jpg"],
    desc: "작은 떡과 물고기를 주님께 드린 마음으로 이웃과 사랑을 나누는 섬김 사역입니다.", // 확인 필요
    note: "교회 헌금 항목에 ‘오병이어’ 목적헌금이 있어 성도님들의 정성으로 이어지고 있습니다." }, // 주보·수입보고서 출처
  "hangul": { title: "한글교실", ministry: "m2",
    photos: ["img/programs/hangul-1.jpg","img/programs/hangul-2.jpg","img/programs/hangul-3.jpg"],
    desc: "필리핀 이웃들에게 한글을 가르치며 우정을 쌓고 복음의 사랑을 전합니다.", // 확인 필요
    note: "교회 헌금 항목에 ‘한글교실’ 목적헌금이 있습니다." }, // 수입보고서 출처
  "prison": { title: "교정선교", ministry: "m2",
    photos: ["img/programs/prison-1.jpg","img/programs/prison-2.jpg"],
    desc: "교정시설에 있는 이들을 찾아가 말씀과 기도로 위로하고 새 삶의 소망을 전합니다." }, // 확인 필요
  "relief": { title: "긴급구호", ministry: "m2",
    photos: ["img/programs/relief-1.jpg","img/programs/relief-2.jpg","img/programs/relief-3.jpg"],
    desc: "재해나 어려움을 당한 이웃에게 필요한 도움을 신속히 전하며 그리스도의 사랑을 실천합니다." }, // 확인 필요
  "minister": { title: "사역자 훈련", ministry: "m3",
    photos: ["img/programs/minister-1.jpg","img/programs/minister-2.jpg","img/programs/minister-3.jpg"],
    desc: "말씀과 기도로 준비된 사역자를 세워, 맡겨진 자리에서 충성스럽게 섬기도록 훈련합니다." }, // 확인 필요
  "lay-mission": { title: "평신도 선교사 훈련원", ministry: "m3",
    photos: ["img/programs/lay-mission-1.jpg","img/programs/lay-mission-2.jpg"],
    desc: "삶의 자리에서 복음을 전하는 평신도 선교사로 준비되도록 함께 배우고 훈련합니다.", // 확인 필요
    note: "10월 25일 한국에서 선교팀이 찾아올 예정입니다. 은혜로운 사역이 되도록 기도 부탁드립니다." }, // 주보 광고 출처
  "youth": { title: "청소년교회", ministry: "m4",
    photos: ["img/programs/youth-1.jpg","img/programs/youth-2.jpg"],
    desc: "다음 세대 청소년들이 예배와 말씀 안에서 믿음으로 자라 가도록 함께합니다.", // 확인 필요
    note: "중고등학생부 예배: 주일 오후 1:30 · 기도제목: 청소년들의 신앙 정립, 비전 정립, 인성 정립, 학습 습관 정립 · 청소년부 코스타(10월 28~30일)" }, // 주보 출처
  "culture": { title: "재능별 문화교육 분야 주도", ministry: "m4",
    photos: ["img/programs/culture-1.jpg","img/programs/culture-2.jpg","img/programs/culture-3.jpg"],
    desc: "성도 한 사람 한 사람이 받은 재능으로 문화교육을 이끌며 이웃과 함께 나눕니다." } // 확인 필요
};
