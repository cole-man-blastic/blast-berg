const c = document.querySelector("canvas");
const ctx = c.getContext("2d");

const jumpForce = 1 / 3;
const moveForce = 2e-4;

const char = new Character();

Updater.updateFunction = function () {
	if (Input.getKeyTapped(" ") && char.bottomY == c.height) char.applyImpulseForce(0, -jumpForce);

	if (Input.getKeyDown("a") || Input.getKeyDown("ArrowLeft")) char.applyForce(-moveForce, 0);
	if (Input.getKeyDown("d") || Input.getKeyDown("ArrowRight")) char.applyForce(moveForce, 0);
	char.update();
	
	if (char.leftX < 0) {
		char.leftX = 0;
		char.stopX();
	}
	if (char.rightX > c.width) {
		char.rightX = c.width;
		char.stopX();
	}
	if (char.topY < 0) {
		char.topY = 0;
		char.stopY();
	}
	if (char.bottomY > c.height) {
    char.bottomY = c.height;
		char.stopY();
  }

	draw();
	Input.update();
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height)

  ctx.fillStyle = "purple";
  ctx.fillRect(char.leftX, char.topY, char.width, char.height);
}
