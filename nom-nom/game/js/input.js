class Input {
  static #keysDown = new Set();

  /**
   * Returns whether the given key is currently pressed.
   * @param {string} key The key to test.
   * @returns {boolean} True if the given key is currently pressed.
   */
  static getKeyDown(key) {
    return this.#keysDown.has(key);
  }

  static #keysTapped = new Set();

  /**
   * Returns whether the given key was pressed in the last frame.
   * @param {string} key The key to test.
   * @returns {boolean} True if the given key was pressed within the last frame.
   */
  static getKeyTapped(key) {
    return this.#keysTapped.has(key);
  }

  /**
   * Call once at the end of each frame so only keys pressed within the last frame are considered tapped.
   */
  static clearTapped() {
    this.#keysTapped.clear();
  }

  static {
    addEventListener("keydown", e => {if (!this.#keysDown.has(e.key)) {
      this.#keysDown.add(e.key);
      this.#keysTapped.add(e.key);
    }});
    addEventListener("keyup", e => this.#keysDown.delete(e.key));    
  }
}
