// 로그아웃 버튼 클릭 시 동작
$("#logoutBtn").on("click", function () {
  logoutAPI()
    .done(function () {
      localStorage.clear();
      window.location.href = "/index.html";
    })
    .fail(function () {
      alert("로그아웃을 실패하였습니다.");
    });
});

// 회원탈퇴 버튼 클릭 시 동작
$("#deleteAccountBtn").on("click", function () {
  const isOk = confirm("정말 탈퇴하시겠습니까?");
  if (!isOk) {
    return;
  }

  deleteAccountAPI()
    .done(function () {
      localStorage.clear();
      window.location.href = "/index.html";
    })
    .fail(function () {
      alert("회원탈퇴를 실패하였습니다.");
    });
});
