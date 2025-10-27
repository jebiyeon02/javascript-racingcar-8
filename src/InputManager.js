import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from './constants/errorMessages.js';
import { CONSTANTS } from './constants/constants.js';

export default class InputManager {
  #names;
  #playTimes;

  async inputNames() {
    this.#names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  }

  removeWhiteSpaceFromNames() {
    this.#names = this.#names
      .split(',')
      .map((name) => name.replaceAll(' ', ''));
  }

  validateNameLength() {
    this.#names.forEach((name) => {
      if (name.length > CONSTANTS.CAR_NAME_MAX_LENGTH)
        throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_OVER_MAX_LENGTH);
    });
  }

  validateNameIsNotBlank() {
    this.#names.forEach((name) => {
      if (name.length === 0) throw new Error(ERROR_MESSAGES.CAR_NAME_BLANK);
    });
  }

  validateNameDuplicate() {
    const nameSet = new Set(this.#names);
    if (this.#names.length !== nameSet.size) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_SAME);
    }
  }

  isValidateNames() {
    this.validateNameLength();
    this.validateNameIsNotBlank();
    this.validateNameDuplicate();
  }

  async inputPlayTimes() {
    this.#playTimes =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  isValidatePlayTimes() {
    if (isNaN(this.#playTimes) || Number(this.#playTimes) < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PLAY_TIMES);
    }
  }

  getNames() {
    return this.#names;
  }

  getPlayTimes() {
    return this.#playTimes;
  }
}
