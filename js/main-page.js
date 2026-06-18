// ==========================================================
// Main Page: reticle cursor and page helpers
// ==========================================================

const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const reticle = document.querySelector(".reticle-cursor");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

const interactiveSelectors = "a, button, input, textarea, select, .project-card";

document.addEventListener("mouseover", (event) => {
  if (event.target.closest(interactiveSelectors)) {
    reticle?.classList.add("is-hovering");
  }
});

document.addEventListener("mouseout", (event) => {
  if (event.target.closest(interactiveSelectors)) {
    reticle?.classList.remove("is-hovering");
  }
});

function animateReticle() {
  cursorX += (mouseX - cursorX) * 0.22;
  cursorY += (mouseY - cursorY) * 0.22;

  if (reticle) {
    reticle.style.left = `${cursorX}px`;
    reticle.style.top = `${cursorY}px`;
  }

  requestAnimationFrame(animateReticle);
}

animateReticle();
