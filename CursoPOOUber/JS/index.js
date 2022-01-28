let conductor = new Account('Andres Herrera', 'AND123')
let car = new Car('AW456', conductor);
// console.table(car);
car.passegenger = 4;
// car.printDataCar();

let carX = new UberX('JPA567', conductor, 'Testa', 'S');
carX.passegenger = 4;
// carX.printDataCar();

let user1 = new User(123, "Juan Perez", "JP123456");
user1.printUserData();

let driver1 = new Driver(789, "Pedro Lopez", "PL987654");
driver1.printUserData();
