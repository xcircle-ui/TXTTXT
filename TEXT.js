const marqueeText = "★ TEST TEXT 1 ★ TEST TEXT 2 ★ TEST TEXT 3 ★ TEST TEXT 4 ★ TEST TEXT 5 ★";

function setMarqueeText(text) {
  const el = document.getElementById("marqueeText");
  if (!el) return;

  el.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  setMarqueeText(marqueeText);
});
