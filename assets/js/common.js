// 모든 AJAX 요청 전에 공통으로 실행
$.ajaxSetup({
  beforeSend: function (xhr) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    }
  },
  error: function (xhr) {
    if (xhr.status === 401) {
      localStorage.removeItem("accessToken");

      alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
      location.href = "/pages/auth/login.html";
    }
  },
});

// 인증 고객 UI로 변경
function updateCustomerAuthUI() {
  const token = localStorage.getItem("accessToken");

  if (token) {
    $(".login-menu").addClass("d-none");
    $(".logout-menu").removeClass("d-none");
    $(".cart-menu").removeClass("d-none");
    $(".navbar-toggler").removeClass("d-none");
  } else if (!token) {
    $(".login-menu").removeClass("d-none");
    $(".logout-menu").addClass("d-none");
    $(".cart-menu").addClass("d-none");
    $(".navbar-toggler").addClass("d-none");
  }
}

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
    .fail(function (xhr) {
      const msg =
      xhr?.responseJSON?.message ||
      xhr?.responseText ||
      "회원탈퇴를 실패하였습니다.";
      alert(msg);
    });
});

// 09:00:00 → 09:00
function formatTime(time) {
  return time.slice(0, 5);
}

// 2026-04-28T15:43:28 → 2026-04-28 15:43:28
function formatDateTime(datetime) {
  return datetime.replace("T", " ");
}

// 2026-04-28T15:43:28 → 2026-04-28
function formatDate(datetime) {
  return datetime.slice(0, 10);
}

/** URL의 storeId에 맞는 가게 접힘을 연다. 없거나 불일치 시 0번 가게 */
function getOwnerSidebarOpenIndex(storeList, urlStoreId) {
  if (!storeList || !storeList.length) {
    return 0;
  }
  if (urlStoreId == null) {
    return 0;
  }
  const found = storeList.findIndex((s) => String(s.id) === String(urlStoreId));
  return found >= 0 ? found : 0;
}

/** 사장(owner) 사이드바: 현재 페이지·가게(storeId)와 같은 링크에 active 표시 */
function highlightOwnerSidebarNav() {
  const path = window.location.pathname.replace(/\\/g, "/");
  const pageStoreId = new URLSearchParams(window.location.search).get(
    "storeId",
  );

  $(".store-side .btn-toggle-nav a").removeClass("active");
  $(".store-side .btn-toggle-nav a").each(function () {
    const href = $(this).attr("href");
    if (!href || href === "#" || href.startsWith("#")) {
      return;
    }
    try {
      const u = new URL(href, window.location.href);
      const linkPath = u.pathname.replace(/\\/g, "/");
      const linkStoreId = u.searchParams.get("storeId");

      if (linkPath !== path) {
        return;
      }
      if (pageStoreId != null) {
        if (String(linkStoreId) !== String(pageStoreId)) {
          return;
        }
      } else if (linkStoreId != null) {
        return;
      }

      $(this).addClass("active");
    } catch (e) {
      /* ignore invalid href */
    }
  });
}
