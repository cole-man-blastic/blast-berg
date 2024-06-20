class Animator {
  static #updateMethod = () => {};

  /**
   * Sets the method to be called each frame.
   * @param {VoidFunction} method The method to be called each frame.
   */
  static setUpdateMethod(method) {
    this.#updateMethod = method;
  }

  static #targetInterval = 1000 / 60;

  /**
   * Sets the target framerate in frames per second.
   * @param {number} fps The new framerate.
   */
  static setTargetFPS(fps) {
    this.#targetInterval = 1000 / fps;
  }

  static #deltaTime = this.#targetInterval;

  static get deltaTime() {
    return this.#deltaTime;
  }

  static #animationFrameId;

  /**
   * Starts the animator.
   */
  static start() {
    let then = 0;
    function animate(now) {
      if (now - then > Animator.#targetInterval) {
        if (then === 0) {
          then = now - Animator.#targetInterval;
        }
        Animator.#deltaTime = now - then;
        then = now - Animator.#deltaTime % Animator.#targetInterval;
        Animator.#updateMethod(); 
      }
      Animator.#animationFrameId = requestAnimationFrame(animate);
    }
    Animator.#deltaTime = Animator.#targetInterval;
    Animator.#updateMethod();
    Animator.#animationFrameId = requestAnimationFrame(animate);
  }

  /**
   * Stops the animator.
   */
  static stop() {
    cancelAnimationFrame(Animator.#animationFrameId);
  }
}
