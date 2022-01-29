class Car {
    #passegenger;
    constructor(license, driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.#passegenger = 0;
    }

    get passegengers () {
        return `The passegenger/s is/are: ${this.#passegenger} `;
    }

    set passegengers (amount) {
        amount === 4 
        ? this.#passegenger = amount
        : console.log('Tienen que ser cuatro pasajeros.');
    }
    
    printDataCar() {
        let {driver} = this;
        console.group('Driver');
        console.table(driver);
        console.groupEnd();
    }
};