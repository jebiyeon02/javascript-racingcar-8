import { CONSTANTS } from "./constants.js";

export const ERROR_MESSAGES = {
  CAR_NAME_LENGTH_OVER_MAX_LENGTH: `[ERROR] : 자동차 이름은 ${CONSTANTS.CAR_NAME_MAX_LENGTH}글자를 초과할 수 없습니다.`,
  CAR_NAME_BLANK: "[ERROR] : 자동차 이름에 빈 값이 존재합니다.",
  CAR_NAME_SAME: "[ERROR] : 2개 이상의 자동차 이름이 동일합니다.",
  INVALID_PLAY_TIMES: "[ERROR] : 시도 횟수는 0 또는 양의 정수이어야 합니다.",
};
