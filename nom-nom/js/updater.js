class Updater {
  static #deltaTime;
  static #fps;
  static #time = 0;
  static #frame = 0;
  static updateFunction = () => {};
  
  static get deltaTime() {return this.#deltaTime;}
  static get fps() {return this.#fps;}
  static get time() {return this.#time;}
  static get frame() {return this.#frame;}

  static #update(timestamp) {
    this.#deltaTime = timestamp - this.#time;
    this.#fps = 1000 / this.#deltaTime;
    this.#time = timestamp;
    this.#frame++;
    
    this.updateFunction();
  }

  static {
    const update = timestamp => this.#update(timestamp);

    function loop(timestamp) {
      update(timestamp);
      requestAnimationFrame(loop);
    }

    loop(0);
  }
}