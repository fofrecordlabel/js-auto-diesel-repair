const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("lock", open);
}

toggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const desktop = window.matchMedia("(min-width: 860px)");
desktop.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

const copyButton = document.querySelector(".copy");
if (copyButton) {
  const label = copyButton.textContent;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyButton.textContent = "Copied";
    } catch {
      copyButton.textContent = "Select tag";
    }
    window.setTimeout(() => {
      copyButton.textContent = label;
    }, 1600);
  });
}
