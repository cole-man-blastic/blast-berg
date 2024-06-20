const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let charX = 0, charY = 0;
ctx.fillStyle = "cyan";

Animator.setUpdateMethod(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.width);

  charX++;

  if (charX >= canvas.width) {
    charX = 0;
    charY += 10;
  }

  ctx.fillRect(charX, charY, 10, 10);

  Input.clearTapped();
});

Animator.start();
