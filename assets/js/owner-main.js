
const state = {
    stores: [
      { id: 1, name: "홍대점", storeStatus: "CLOSED" },
      { id: 2, name: "부평점", storeStatus: "OPEN" },
      { id: 3, name: "강남점", storeStatus: "CLOSED" },
    ],
    counts: { PENDING: 45, COOKING: 52, DELIVERING: 55 },
    selectedStoreId: 2,
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
        return `
          <div class="store-item" data-store-id="${s.id}">
            <div class="store-name">${escapeHtml(s.name)}</div>
            <div class="store-badge ${open ? "open" : ""}">
              ${statusText(s.storeStatus)}
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
      const item = e.target.closest(".store-item");
      if (!item) return;
      state.selectedStoreId = Number(item.dataset.storeId);
      // 첫 이미지처럼 "선택 강조"까지 원하면, selectedStoreId 기반으로 active 클래스를 추가 렌더링하면 됨
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