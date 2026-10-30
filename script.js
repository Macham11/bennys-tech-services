// ===== Mobile menu (hamburger) =====
const menuButton = document.getElementById("menu-toggle");
const menu = document.querySelector(".main-nav");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

// Tap the three lines: open if closed, close if open
menuButton.addEventListener("click", function () {
  setMenu(!menu.classList.contains("open"));
});

// Close the menu after the visitor taps a link
menu.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});

// Close the menu with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

// If the screen becomes wide (for example, a tablet is turned sideways), reset the menu
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    setMenu(false);
  }
});

// ===== Footer year updates itself =====
document.getElementById("year").textContent = new Date().getFullYear();
