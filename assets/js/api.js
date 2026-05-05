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

// 장바구니 아이템 조회 API
function cartAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/cart",
    type: "GET",
  });
}

// 장바구니 아이템 삭제 API
function deleteCartItemAPI(itemId) {
  return $.ajax({
    url: COMMON_URL + `/api/cart/items/${itemId}`,
    type: "DELETE",
  });
}

// 아이템 수량 변경 API
function updateItemQuantityAPI(itemId, data) {
  return $.ajax({
    url: COMMON_URL + `/api/cart/items/${itemId}`,
    type: "PATCH",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 주문 API
function orderAPI(data) {
  return $.ajax({
    url: COMMON_URL + "/api/orders",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 고객 주문 내역 조회 API
function customerOrdersAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/orders",
    type: "GET",
  });
}

// 고객 주문 단건 조회 API
function customerOrderDetailAPI(orderId) {
  return $.ajax({
    url: COMMON_URL + `/api/orders/${orderId}`,
    type: "GET",
  });
}

// 주문 취소 API
function cancelOrderAPI(orderId) {
  return $.ajax({
    url: COMMON_URL + `/api/orders/${orderId}`,
    type: "DELETE",
  });
}

// 리뷰 작성 API
function createReviewAPI(orderId, data) {
  return $.ajax({
    url: COMMON_URL + `/api/orders/${orderId}/review`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 가게 리뷰 조회 API
function storeReviewsAPI(storeId) {
  return $.ajax({
    url: COMMON_URL + `/api/stores/${storeId}/reviews`,
    type: "GET",
  });
}

// 내 리뷰만 조회 API
function myReviewsAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/reviews/me",
    type: "GET",
  });
}

// 주문 수 조회 API
function orderCountAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/owner/orders/count",
    type: "GET",
  });
}

// 본인 가게 다건 조회 API
function myStoresAPI() {
  return $.ajax({
    url: COMMON_URL + "/api/owner/stores",
    type: "GET",
  });
}

// 가게 영업 상태 변경 API
function updateStoreStatusAPI(storeId, data) {
  return $.ajax({
    url: COMMON_URL + `/api/owner/stores/${storeId}/status`,
    type: "PATCH",
    contentType: "application/json",
    data: JSON.stringify(data),
  });
}

// 가게 폐업 API
function storeKillAPI(storeId) {
  return $.ajax({
    url: COMMON_URL + `/api/owner/stores/${storeId}`,
    type: "DELETE",
  });
}

// 리뷰 삭제 API
function deleteReviewAPI(storeId, reviewId) {
  return $.ajax({
    url: COMMON_URL + `/api/owner/stores/${storeId}/reviews/${reviewId}`,
    type: "DELETE",
  });
}
