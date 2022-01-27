let conductor = new Account('Andres Herrera', 'AND123')
let car = new Car('AW456', conductor);
// console.table(car);
car.passegenger = 4;
// car.printDataCar();

let carX = new UberX('JPA567', conductor, 'Testa', 'S');
carX.passegenger = 4;
carX.printDataCar();