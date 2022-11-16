//// 메이킹 히스토리
// console.log(
//   '%c2022 ACROVERSE CREATIVE',
//   'color: black; font-size: 26px; font-weight: bold'
// );
// console.log(
//   '%c\nThis version(Untitled) was created in late 2022.\n· Creative Director: PARK BOEUN(boeunde)\n· Project Lead: PARK BOEUN, LEE MINHYE\n· Design: JEONG JAEHEE, LEE SEULBYUL\n· Publish: PARK BOEUN\n',
//   'color: gray; font-size: 13px'
// );
// console.log(
//   '%cACROVERSE CREATIVE ⓒ All rights reserved.',
//   'color: black; font-size: 16px'
// );

/// 새로고침 시 언제나 맨 위로 (Complete)
if (window.scrollY <= 0) {
  // console.log('Already at the top.');
} else {
  // console.log('Scroll to the top');
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

/// 섹션 위치에 따라 디자인 요소 변경하기 (Complete) 
document.addEventListener("scroll", function() {
  if (scrollY > 100){
    document.querySelector("header>a>i").style.opacity = "1"
    document.querySelector("header").style.borderBottom = "1px solid #fff"
    document.querySelector("#tothebottom").style.opacity = "0"
  } else{
    document.querySelector("header>a>i").style.opacity = "0"
    document.querySelector("header").style.borderBottom = "1px solid #101010"
    document.querySelector("#tothebottom").style.opacity = "1"
  }
});

/// 팝업에서 클릭 발생 시 닫기 (Complete)
const closePopup = document.querySelectorAll("#box-nav-layer > ul")
closePopup[0].addEventListener("click", function(event) {
  document.getElementById("btn-nav-layer").checked = false; 
})

/// section에 스크롤 반응 인터랙션 부여 (Complete) 
let observer = new IntersectionObserver((e)=>{
  e.forEach((showing)=>{
    if (showing.isIntersecting){
      showing.target.style.opacity = 1;
    } else{
      showing.target.style.opacity = 0;
    }
  })
})
let section = document.querySelectorAll('section')
observer.observe(section[0]) // -- html > main > section 개수대로 추가되어야 함
observer.observe(section[1])
observer.observe(section[2])
observer.observe(section[3])
observer.observe(section[4])
observer.observe(section[5])
observer.observe(section[6])
observer.observe(section[7])
