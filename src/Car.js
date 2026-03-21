import { CAR, ERROR_MESSAGE } from "./constants";

class Car {
  #name;
  #distance;

  constructor(name) {
    if (
      name.length > CAR.NAME.MAX_LENGTH ||
      name.length < CAR.NAME.MIN_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.PREFIX);
    }
    this.#name = name;
    this.#distance = 0;
  }

  moveForward(randomNumber) {
    if (randomNumber >= CAR.FORWARD.BASE) {
      this.#distance++;
    }
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
