import App from "../src/App";

describe("자동차 리스트 테스트", () => {
  test("[기능] 5개의 이름을 받아, 5개의 자동차를 생성해야 한다.", () => {
    // given
    const names = ["dium", "fit", "dol", "hyun", "any"];

    // when & then
    expect(App.getCars(names).length).toEqual(5);
  });
});
