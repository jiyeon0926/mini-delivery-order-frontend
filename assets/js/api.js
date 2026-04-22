const COMMON_URL = "http://localhost:8080";

// 모든 AJAX 요청 전에 공통으로 실행
$.ajaxSetup({
  beforeSend: function (xhr) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    }
  },
});

// 고객 회원가입 API
function customerSignupAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/auth/users",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 사장님 회원가입 API
function ownerSignupAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/auth/owners",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 로그인 API
function loginAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/auth/login",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 로그아웃 API
function logoutAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/auth/logout",
    type: "POST",
  });
}
