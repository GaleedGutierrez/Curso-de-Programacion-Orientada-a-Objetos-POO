const conductor = new Account(78998 ,'Andres Herrera', 'AND123');
// const car = new Car('AW456', conductor);
// console.table(car);
// car.passegenger = 4;
// car.printDataCar();

const carX = new UberX('JPA567', conductor, 'Testa', 'S');
carX.printDataCar();
carX.passegengers = 4;
console.log(carX.passegengers);

// const user1 = new User(123, 'Juan Perez', 'JP123456');
// user1.printUserData(user1);

// const driver1 = new Driver(789, 'Pedro Lopez', 'PL987654');
// driver1.printUserData(driver1);

