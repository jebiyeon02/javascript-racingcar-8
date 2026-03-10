class Car {
  #name;
  #distance;

  constructor(name) {
    if (name.length > 5 || name.length < 1) {
      throw new Error("[ERROR]");
    }
    this.#name = name;
    this.#distance = 0;
  }

  moveForward(randomNumber) {
    if (randomNumber >= 4) {
      this.#distance++;
    }
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
