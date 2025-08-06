// index js

// MATRIX EFFECT
const canvas = document.getElementById("matrixCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00e676";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 40);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// DARK / LIGHT MODE TOGGLE
const toggle = document.getElementById("toggleMode");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  });
}

// MODAL POPUP
const modal = document.querySelector(".modal");
const btn = document.querySelector(".modal-btn");
const close = document.querySelector(".close");

if (modal && btn && close) {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}
