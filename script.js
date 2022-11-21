// 메이킹 히스토리
console.log(
  '%c2022 ACROVERSE CREATIVE',
  'color: black; font-size: 26px; font-weight: bold'
);
console.log(
  '%c\nThis version(Untitled) was created in late 2022.\n· Creative Director: PARK BOEUN(boeunde)\n· Project Lead: PARK BOEUN, LEE MINHYE\n· Design: JEONG JAEHEE, LEE SEULBYUL\n· Publish: PARK BOEUN\n',
  'color: gray; font-size: 13px'
);
console.log(
  '%cACROVERSE CREATIVE ⓒ All rights reserved.',
  'color: black; font-size: 16px'
);

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
    document.querySelector("header").style.backgroundColor = "#101010"
    document.querySelector("#tothebottom").style.opacity = "0"
  } else{
    document.querySelector("header>a>i").style.opacity = "0"
    document.querySelector("header").style.borderBottom = "transparent"
    document.querySelector("header").style.backgroundColor = "transparent"
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

// 클립보드에 담당자 이메일 복사 (Complete)
function copyEmail(){
  const emailAddress = document.getElementById("email").innerText;
  navigator.clipboard.writeText(emailAddress)
    .then(() => {
      alert("이메일 주소가 클립보드에 복사되었습니다.\n" + emailAddress)
    })
    .catch(err => {
      alert("이메일 주소 복사에 실패했습니다. 관리자에게 문의해주세요.\n" + emailAddress)
    })
}

// 클립보드에 주소 복사 (Complete)
function copyAddr(){
  const locationAddress = document.getElementById("address").innerText;
  navigator.clipboard.writeText(locationAddress)
    .then(() => {
      alert("도로명 주소가 클립보드에 복사되었습니다.\n" + locationAddress)
    })
    .catch(err => {
      alert("주소 복사에 실패했습니다. 관리자에게 문의해주세요.\n" + locationAddress)
    })
}

// 이메일발송 유효성 검사 (Complete)
function eventCheck(){
  if(document.getElementById("name").value==''){
    alert("이름을 입력해주세요.");
    return false;
  }
  if(document.getElementById("team").value==''){
    alert("소속/직책을 입력해주세요.");
    return false;
  }
  if(document.getElementById("contact").value==''){
    alert("연락처를 입력해주세요.");
    return false;
  }
  if(document.getElementById("content").value==''){
    alert("내용을 입력해주세요.");
    return false;
  }
  if(gform.agree.checked != true){
    alert("개인정보이용에 동의하셔야 메시지 발송이 가능합니다.");
    gform.agree.focus();
    return false;
  }

  if(!confirm('메시지를 발송하시겠습니까?\n수신인: 인사 및 견적 담당자 서영원 실장') == false){
    alert('발송되었습니다.\n잠시 후 화면이 새로고침됩니다.\n\n[안내]\n3영업일 내 답변을 받지 못하셨다면 서버에 일시적인 문제가 발생한 경우일 수 있습니다. 이 경우 사이트 내 메일 주소로 연락 부탁드립니다.');
    setTimeout(() => location.reload(), 500);
  }else{
    alert('취소되었습니다.')
  }
}