document.documentElement.classList.add("js");

// Scroll-reveal
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Active nav link
const links = document.querySelectorAll(".nav__links a[href^='#']");
const sections = [...links].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
window.addEventListener("scroll", () => {
  const y = window.scrollY + 140;
  let current = null;
  sections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
}, { passive: true });

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
