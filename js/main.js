const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input')

searchEL.addEventListener('click', function () {

    searchInputEL.focus();



});

searchInputEL.addEventListener('focus', function () {

    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');

});
searchInputEL.addEventListener('blur', function () {

    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');



});

const badgeEL = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {

    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'

        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }



}, 300));
// _.throttle(함수 , 시간)


toTopEl.addEventListener('click',function(){
gsap.to(window,.7,{
    scrollTo: 0
});



});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 첫번째  0.7 초  1.4 2.1 2.7
        opacity: 1



    });



});

// Swiper 생성자(클래스) 생성
// Swiper(선택자, 옵션)
// direction : 방향
//autoplay : true, 자동재생 여부
//loop : true  반복재생 여부
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true


});

new Swiper('.promotion .swiper-container', {
    // 기본값 direction :'horizontal',
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //  슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000 //밀리세컨드 단위 기본값 3000 
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }

});

new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop:true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation:{
perbEl:'.awards .swiper-prev',
nextEl: '.awards .swiper-next'

    }


});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {

    isHidePromotion = !isHidePromotion
    //특정변수의 값을 반대값으로 반환할수있다.
    if (isHidePromotion) {
        //숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        //보임 처리!
        promotionEl.classList.remove('hide');
    }

});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut, //타이밍 함수
        delay: random(0, delay) //지연시간
    });

}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){

new ScrollMagic
    .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소
        triggerHook: .8        // 뷰포트의 상단 0 --- 하단 1
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());



});

// set
const thisYear =document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022