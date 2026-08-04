// 양심만세런 - 최소 서비스워커
// "홈 화면에 추가" 자동 설치 팝업(beforeinstallprompt)이 뜨려면
// 브라우저가 요구하는 최소 조건 중 하나가 "활성 서비스워커 + fetch 핸들러"입니다.
// 오프라인 캐싱 기능은 넣지 않고, 조건 충족용으로만 아주 가볍게 둡니다.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 그냥 네트워크로 그대로 통과시킵니다 (캐싱 없음)
  event.respondWith(fetch(event.request));
});
