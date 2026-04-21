const COMMON_URL = "http://localhost:8080";

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
