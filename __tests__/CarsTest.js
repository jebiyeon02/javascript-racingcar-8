import App from "../src/App";
import { ERROR_MESSAGE } from "../src/constants";

describe("자동차 리스트 테스트", () => {
  test("[기능] 5개의 이름을 받아, 5개의 자동차를 생성해야 한다.", () => {
    // given
    const names = ["dium", "fit", "dol", "hyun", "any"];

    // when & then
    expect(App.getCars(names).length).toEqual(5);
  });

  test("[예외] 5대의 자동차 중 중복 이름이 존재하면 예외가 발생한다.", () => {
    // given
    const names = ["dium", "dium", "dol", "hyun", "any"];

    // when & then
    expect(() => App.getCars(names)).toThrow(ERROR_MESSAGE.PREFIX);
  });
});
