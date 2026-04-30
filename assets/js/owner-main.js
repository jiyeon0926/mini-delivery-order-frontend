
const state = {
    stores: [
      { id: 1, name: "홍대점", storeStatus: "CLOSED" },
      { id: 2, name: "부평점", storeStatus: "OPEN" },
      { id: 3, name: "강남점", storeStatus: "CLOSED" },
    ],
    counts: { PENDING: 45, COOKING: 52, DELIVERING: 55 },
    selectedStoreId: 2,
    expandedStoreId: null, // 펼친 지점 id (없으면 null)
  };
  
  const qs = (sel) => document.querySelector(sel);  
  
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  
  function statusText(storeStatus) {
    return storeStatus === "OPEN" ? "영업 중" : "영업 전";
  }
  
  function renderStoreList() {
    const root = qs("#storeList");
    root.innerHTML = state.stores
      .map((s) => {
        const open = s.storeStatus === "OPEN";
        const expanded = state.expandedStoreId === s.id;
  
        // TODO: 실제 경로/쿼리는 프로젝트에 맞게 수정
        const q = `?storeId=${s.id}`;
  
        return `
          <div class="store-block" data-store-id="${s.id}">
            <div class="store-item" data-role="store-header" data-store-id="${s.id}">
              <div class="store-name">${escapeHtml(s.name)}</div>
              <div class="store-badge ${open ? "open" : ""}">
                ${statusText(s.storeStatus)}
              </div>
            </div>
  
            <div class="store-submenu" ${expanded ? "" : "hidden"}>
              <nav class="side owner-manage-side store-submenu-nav">
                <a class="side-item ${expanded ? "active" : ""}" href="/pages/owner/owner-main.html${q}">대시보드</a>
                <a class="side-item" href="/pages/owner/owner-store-manage.html${q}">가게 관리</a>
                <a class="side-item" href="/pages/owner/owner-order-list.html${q}">주문 목록</a>
                <a class="side-item" href="/pages/owner/owner-review-manage.html${q}">리뷰 관리</a>
                <a class="side-item" href="/pages/owner/owner-menu-manage.html${q}">메뉴 관리</a>
              </nav>
            </div>
          </div>
        `;
      })
      .join("");
  }
  
  function renderCounts() {
    qs("#countPending").textContent = String(state.counts.PENDING ?? 0);
    qs("#countCooking").textContent = String(state.counts.COOKING ?? 0);
    qs("#countDelivering").textContent = String(state.counts.DELIVERING ?? 0);
  }
  
  function renderStatusList() {
    const root = qs("#statusList");
    root.innerHTML = state.stores
      .map((s) => {
        const checked = s.storeStatus === "OPEN" ? "checked" : "";
        return `
          <div class="status-item">
            <div class="status-meta">
              <div class="status-name">${escapeHtml(s.name)}</div>
              <div class="status-sub">영업 상태</div>
            </div>
  
            <label class="switch" aria-label="${escapeHtml(s.name)} 영업 상태">
              <input type="checkbox" class="store-toggle" data-store-id="${s.id}" ${checked} />
            </label>
          </div>
        `;
      })
      .join("");
  }
  
  function renderAll() {
    renderStoreList();
    renderCounts();
    renderStatusList();
  }
  
  function updateStoreStatusLocal(storeId, nextStatus) {
    state.stores = state.stores.map((s) =>
      s.id === storeId ? { ...s, storeStatus: nextStatus } : s
    );
  }
  
  function bindEvents() {
    qs("#statusList").addEventListener("change", (e) => {
      const input = e.target;
      if (!input.classList.contains("store-toggle")) return;
  
      const storeId = Number(input.dataset.storeId);
      const nextStatus = input.checked ? "OPEN" : "CLOSED";
  
      updateStoreStatusLocal(storeId, nextStatus);
      renderAll();
  
      // API 붙일 때는 여기서 PATCH 호출로 교체
      // fetch(`/api/owner/stores/${storeId}/status`, { method:"PATCH", headers:{...}, body: JSON.stringify({storeStatus: nextStatus}) })
    });
  
    qs("#storeList").addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && link.closest(".store-submenu")) {
        return; // 링크 클릭은 브라우저 기본 이동
      }
    
      const header = e.target.closest('[data-role="store-header"]');
      if (!header) return;
    
      e.preventDefault();
    
      const storeId = Number(header.dataset.storeId);
      state.selectedStoreId = storeId;
      state.expandedStoreId = state.expandedStoreId === storeId ? null : storeId;
    
      renderStoreList(); // 서브메뉴 열림/닫힘 반영
    });
  }
  
  function openDrawer() {
    document.body.classList.add("drawer-open");
    const backdrop = document.querySelector("#drawerBackdrop");
    const drawer = document.querySelector("#drawer");
    if (backdrop) backdrop.hidden = false;
    if (drawer) drawer.setAttribute("aria-hidden", "false");
  }
  
  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    const backdrop = document.querySelector("#drawerBackdrop");
    const drawer = document.querySelector("#drawer");
    if (drawer) drawer.setAttribute("aria-hidden", "true");
    // 트랜지션 끝난 뒤 숨김 처리(클릭 막기)
    if (backdrop) {
      setTimeout(() => (backdrop.hidden = true), 180);
    }
  }
  
  function bindDrawerEvents() {
    const openBtn = document.querySelector("#drawerOpenBtn");
    const closeBtn = document.querySelector("#drawerCloseBtn");
    const backdrop = document.querySelector("#drawerBackdrop");
  
    openBtn?.addEventListener("click", openDrawer);
    closeBtn?.addEventListener("click", closeDrawer);
    backdrop?.addEventListener("click", closeDrawer);
  
    // ESC로 닫기
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    bindEvents();
    bindDrawerEvents();
  });