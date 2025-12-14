const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => {
  // بسيط: يفتح/يقفل الناف
  if (!nav) return;
  const isHidden = getComputedStyle(nav).display === "none";
  nav.style.display = isHidden ? "flex" : "none";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "64px";
  nav.style.right = "4%";
  nav.style.left = "4%";
  nav.style.padding = "12px";
  nav.style.background = "rgba(5,8,14,.92)";
  nav.style.border = "1px solid rgba(255,255,255,.06)";
  nav.style.borderRadius = "14px";
});

const langBtn = document.getElementById("langBtn");
langBtn?.addEventListener("click", () => {
  // هذا تبديل بسيط اتجاه الصفحة (RTL/LTR) كبداية
  const html = document.documentElement;
  const isRTL = html.getAttribute("dir") === "rtl";
  html.setAttribute("dir", isRTL ? "ltr" : "rtl");
  html.setAttribute("lang", isRTL ? "en" : "ar");
});

const fakeSendBtn = document.getElementById("fakeSendBtn");
const formNote = document.getElementById("formNote");
fakeSendBtn?.addEventListener("click", () => {
  if (formNote) formNote.textContent = "تم الارسال.";
});
