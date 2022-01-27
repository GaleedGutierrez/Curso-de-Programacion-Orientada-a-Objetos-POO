class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo.");
        Car car = new Car();
        car.id = 1;
        car.license = "AMQ123";
        car.driver = "Andres Herrera";
        car.passegenger = 4;
        car.printDataCar();

        Car car2 = new Car();
        car.id = 2;
        car2.license = "QWE567";
        car2.driver = "Fernando Gonzalez";
        car2.passegenger = 3;
        car.printDataCar();
    }
}