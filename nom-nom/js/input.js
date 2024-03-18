class Input {
  static #keysDown = new Set();
  static #keysTapped = new Set();

  /**
   * Call once at the start if every frame.
   */
  static update() {
    this.#keysTapped.clear();
  }

  /**
   * Returns whether the given key is currently pressed.
   * @param {string} key The key to test.
   * @returns {boolean} True if the given key is currently pressed.
   */
  static getKeyDown(key) {
    return this.#keysDown.has(key);
  }

  /**
   * Returns whether the given key was pressed in the last frame.
   * @param {string} key The key to test.
   * @returns {boolean} True if the given key was pressed within the last frame.
   */
  static getKeyTapped(key) {
    return this.#keysTapped.has(key);
  }

  static {
    addEventListener("keydown", e => {if (!this.#keysDown.has(e.key)) {
      this.#keysDown.add(e.key);
      this.#keysTapped.add(e.key);
    }});
    addEventListener("keyup", e => this.#keysDown.delete(e.key));    
  }
}
