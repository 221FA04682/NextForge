// ===========================
// NexaForge — Home Page JS
// ===========================

(function () {
  "use strict";

  // ---- Portfolio Filter ----
  const filterBtns = document.querySelectorAll(".port-btn");
  const portItems = document.querySelectorAll(".port-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;
      portItems.forEach((item) => {
        if (filter === "all" || item.dataset.cat === filter) {
          item.style.opacity = "1";
          item.style.transform = "";
          item.style.pointerEvents = "";
        } else {
          item.style.opacity = "0.2";
          item.style.transform = "scale(0.97)";
          item.style.pointerEvents = "none";
        }
      });
    });
  });

  // ---- Counter animation ----
  function animateCount(el, end, suffix, decimals = 0) {
    const duration = 2000;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = eased * end;
      el.textContent =
        decimals > 0 ? val.toFixed(decimals) + suffix : Math.floor(val) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statsEl = document.querySelector(".hero-stats");
  if (statsEl) {
    const statsObs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nums = document.querySelectorAll(".hero-stat-num");
          const data = [
            { val: 500, suffix: "+" },
            { val: 99.9, suffix: "%", decimals: 1 },
            { val: 12, suffix: "ms" },
            { val: 200, suffix: "+" },
          ];
          nums.forEach((el, i) => {
            animateCount(el, data[i].val, data[i].suffix, data[i].decimals || 0);
          });
          statsObs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    statsObs.observe(statsEl);
  }

  // ---- Typing effect in terminal ----
  const term = document.querySelector(".term-body");
  if (term) {
    const lines = term.querySelectorAll("div");
    lines.forEach((line, i) => {
      line.style.opacity = "0";
      setTimeout(() => {
        line.style.transition = "opacity 0.2s";
        line.style.opacity = "1";
      }, i * 280);
    });
  }
})();
