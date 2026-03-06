// ===========================
// NexaForge — Contact Page JS
// ===========================

(function () {
  "use strict";

  // ---- Service pill selection ----
  const pills = document.querySelectorAll(".service-pill");
  pills.forEach((p) => {
    p.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });

  // ---- Budget option selection ----
  const budgets = document.querySelectorAll(".budget-opt");
  budgets.forEach((b) => {
    b.addEventListener("click", function () {
      budgets.forEach((x) => x.classList.remove("picked"));
      this.classList.add("picked");
    });
  });

  // ---- FAQ accordion ----
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    const q = faq.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const wasOpen = faq.classList.contains("open");
      faqs.forEach((f) => f.classList.remove("open"));
      if (!wasOpen) faq.classList.add("open");
    });
  });

  // ---- Form submit ----
  const form = document.getElementById("contact-form");
  const formInner = document.getElementById("form-inner");
  const formSuccess = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const btn = this.querySelector(".btn-submit");
      const btnText = btn.querySelector(".btn-text");
      btnText.textContent = "Sending...";
      btn.disabled = true;
      btn.style.opacity = "0.7";

      // Simulate API call
      setTimeout(() => {
        formInner.style.display = "none";
        formSuccess.classList.add("show");
      }, 1600);
    });
  }

  // ---- Input float labels (optional enhancement) ----
  document.querySelectorAll(".form-input, .form-textarea, .form-select").forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
    });
  });
})();
