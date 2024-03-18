class Character {
  #x = 0;
  #y = 0;
	#w = 20;
	#h = 20;
  #vx = 0;
  #vy = 0;
	#ax = 0;
	#ay = 0;
  #gravity = 1e-3;
  #friction = 1e-3;

  get leftX() {return this.#x;}
  get rightX() {return this.#x + this.#w;}
  get centerX() {return this.#x + this.#w / 2;}
  get topY() {return this.#y;}
  get bottomY() {return this.#y + this.#h;}
  get centerY() {return this.#y + this.#h / 2;}
  get width() {return this.#w;}
  get height() {return this.#h;}

  set leftX(x) {this.#x = x;}
  set rightX(x) {this.#x = x - this.#w;}
  set centerX(x) {this.#x = x - this.#w / 2;}
  set topY(y) {this.#y = y;}
  set bottomY(y) {this.#y = y - this.#h;}
  set centerY(y) {this.#y = y - this.#h / 2;}

  /**
   * Call once at the start if every frame.
   */
  update() {
    this.#ay += this.#gravity;
    this.#ax -= this.#vx * this.#friction;

    this.#x += this.#ax * Updater.deltaTime ** 2 / 2 + this.#vx * Updater.deltaTime;
		this.#y += this.#ay * Updater.deltaTime ** 2 / 2 + this.#vy * Updater.deltaTime;
		this.#vx += this.#ax * Updater.deltaTime;
		this.#vy += this.#ay * Updater.deltaTime;
    this.#ax = 0;
    this.#ay = 0;
  }

  /**
   * Applies a change in acceleration in px/ms^2.
   * @param {number} x The change in x acceleration in px/ms^2.
   * @param {number} y The change in y acceleration in px/ms^2.
   */
  applyForce(x, y) {
    this.#ax += x;
    this.#ay += y;
  }

  /**
   * Applies a change in velocity in px/ms.
   * @param {number} x The change in x velocity in px/ms.
   * @param {number} y The change in y velocity in px/ms.
   */
  applyImpulseForce(x, y) {
    this.#vx += x;
    this.#vy += y;
  }

  /**
   * Sets x velocity to 0 px/ms.
   */
  stopX() {
    this.#vx = 0;
  }

  /**
   * Sets y velocity to 0 px/ms.
   */
  stopY() {
    this.#vy = 0;
  }
};
