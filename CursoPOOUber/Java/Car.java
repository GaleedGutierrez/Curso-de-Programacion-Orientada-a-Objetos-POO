public class Car {
    Integer id;
    String license;
    Account driver;
    Integer passegenger;

    public Car(String license, Account driver) {
        this.license = license;
        this.driver = driver;
    }

    void printDataCar() {
        System.out.println("Id: " + id);
        System.out.println("Car " + id + " License: " + license);
        System.out.println("Car " + id + " Driver: " + driver.name);
        System.out.println("Car " + id + " Passegenger: " + passegenger);
    }
}

