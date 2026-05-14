// Reveal on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('on'), i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.r').forEach(el => obs.observe(el));

// Console easter egg
console.log('%c M.A. Life OS ', 'background:#22d3ee;color:#05080c;font-weight:bold;font-size:13px;padding:4px 10px;border-radius:4px;');
console.log('%c v2.0 — Arch Linux Mindset ', 'color:#34d399;font-size:11px;');
