import Car from "../src/Car";
import RankManager from "../src/RankManager";

describe("등수 계산 테스트", () => {
  test("[기능] 가장 멀리 이동한 자동차의 거리를 반환해야 한다.", () => {
    // given
    const names = ["a", "b", "c", "d", "e"];
    const cars = names.map((name) => new Car(name));

    // when
    cars[0].moveForward(4);
    cars[0].moveForward(4);
    const maxDistance = RankManager.getMaxDistance(cars);

    // then
    expect(maxDistance).toEqual(2);
  });

  test("[기능] 5대의 자동차 중 특정 거리만큼 이동한 자동차를 모두 반환해야 한다.", () => {
    // given
    const names = ["a", "b", "c", "d", "e"];
    const cars = names.map((name) => new Car(name));
    const maxDistance = 2;

    // when
    cars[0].moveForward(4);
    cars[0].moveForward(4);
    cars[1].moveForward(4);
    cars[1].moveForward(4);
    cars[2].moveForward(4);
    cars[2].moveForward(4);

    // then
    expect(RankManager.getAllCars(cars, maxDistance).length).toEqual(3);
  });
});
