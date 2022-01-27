class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo.");
        Car car = new Car("AMQ123", new Account("Andres Herrera", "ADN123"));
        car.id = 1;
        car.passegenger = 4;
        car.printDataCar();

        // Car car2 = new Car("AMQ123", new Account("Andres Herrera", "ADN123"));
        // car.id = 2;
        // car2.passegenger = 3;
        // car.printDataCar();
    }
}