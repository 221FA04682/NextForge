// ===========================
// NexaForge — Shared JS
// ===========================

(function () {
  "use strict";

  // ---- Custom Cursor ----
  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + "px";
      cursor.style.top = my - 6 + "px";
    });

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + "px";
      ring.style.top = ry - 18 + "px";
      requestAnimationFrame(animRing);
    };
    animRing();

    const hoverEls = document.querySelectorAll(
      "a, button, .svc-card, .port-item, .port-btn, .step, .testi-card, .price-card, .feat-item, .faq-item, .ci-item, .office-card, .service-pill, .budget-opt"
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        ring.style.transform = "scale(1.4)";
        ring.style.borderColor = "rgba(59,130,246,0.85)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        ring.style.transform = "scale(1)";
        ring.style.borderColor = "rgba(59,130,246,0.5)";
      });
    });
  }

  // ---- Scroll-triggered Nav ----
  const nav = document.getElementById("main-nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
    });
  }

  // ---- Scroll Progress Bar ----
  const pb = document.getElementById("progress-bar");
  if (pb) {
    window.addEventListener("scroll", () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      pb.style.width = pct + "%";
    });
  }

  // ---- Reveal on Scroll ----
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((r) => observer.observe(r));
  }

  // ---- Mobile Menu ----
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const menuClose = document.getElementById("menu-close");

  const openMenu = () => {
    mobileMenu?.classList.add("open");
    mobileOverlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
    document.body.style.overflow = "";
  };
  hamburger?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  mobileOverlay?.addEventListener("click", closeMenu);

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ---- Active nav link ----
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navLinks.forEach((a) => {
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + e.target.id
            );
          });
        }
      });
    },
    { threshold: 0.45 }
  );
  sections.forEach((s) => sectionObserver.observe(s));
})();
