import Car from "../src/Car";

describe("자동차 테스트", () => {
  test("[기능] 이동한 거리가 0인 자동차가 생성되아야 한다.", () => {
    // given
    const car = new Car("name");

    // when & then
    expect(car.getDistance()).toEqual(0);
  });
});
