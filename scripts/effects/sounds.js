const hoverSound = new Audio('sounds/hover.wav');
const clickSound = new Audio('sounds/click.wav');

function playHoverSound() {
  hoverSound.currentTime = 0;
  hoverSound.play();
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const clickableElements = document.querySelectorAll("a:not(footer a), button:not(footer button)");
  clickSound.volume = 0.2;
  hoverSound.volume = 0.2;
  clickableElements.forEach(el => {
    el.addEventListener("mouseenter", playHoverSound);
    el.addEventListener("click", playClickSound);
  });
});

