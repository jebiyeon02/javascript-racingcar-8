class Car {
  #name;
  #distance;

  constructor(name) {
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
