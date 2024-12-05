$(document).ready(function () {
  const player_list = new Swiper(".player_list", {
    slidesPerView: 5, //가로 한줄에 보이는 슬라이드 갯수
    spaceBetween: 30,//슬라이드 간의 거리 px
    centeredSlides: true,// 첫번째 슬라이드가 정중앙
    loop: true, //순환
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    scrollbar: {
      el: ".swiper-scrollbar", 
      hide: false, //스크롤바 숨기지 않기
      
    },
  });



const marquee = $('.spon').marquee({
  gap: 10,
  speed: 100,
  duplicated: true,
  startVisible: true,
  allowCss3Support: true,
  css3easing: 'linear',
}).on('finished', function () {
  marquee.marquee('resume');
  });
});