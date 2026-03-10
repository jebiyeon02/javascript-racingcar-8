class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
