import Car from '../Car.js';

const createCarsFromNames = (names) => {
  const cars = names.reduce((acc, name) => {
    acc.push(new Car(name));
    return acc;
  }, []);

  return cars;
};

export default createCarsFromNames;
