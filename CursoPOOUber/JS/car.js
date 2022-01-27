class Car {
    constructor(license, driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.passegenger;
    }

    printDataCar() {
        let {driver} = this;
        console.table(driver);
    }
};