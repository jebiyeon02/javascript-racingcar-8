const RankManager = {
  getMaxDistance(cars) {
    const allDistance = cars.map((car) => car.getDistance());

    return Math.max(...allDistance);
  },

  getAllCars(cars, targetNumber) {
    return cars.filter((car) => car.getDistance() === targetNumber);
  },
};

export default RankManager;
