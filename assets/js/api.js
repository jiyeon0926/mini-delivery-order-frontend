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

// 프로필 조회
function profileAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/users/me",
    type: "GET",
  });
}

// 닉네임 변경 API
function nicknameAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/users/me/nickname",
    type: "PATCH",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 회원탈퇴 API
function deleteAccountAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/users/me",
    type: "DELETE",
  });
}

// 비밀번호 변경 API
function passwordAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/users/me/password",
    type: "PATCH",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 가게 검색 API
function searchStoresAPI(keyword) {
  const params = {};
  if (keyword != null) {
    params.keyword = keyword;
  }

  return $.ajax({
    url: COMMON_URL + "/api/stores",
    type: "GET",
    data: params,
  });
}

// 가게 단건 조회 API
function storeDetailAPI(storeId) {
  return $.ajax({
    url: COMMON_URL + `/api/stores/${storeId}`,
    type: "GET",
  });
}

// 장바구니 아이템 추가 API
function addCartItemAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/cart/items",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}
