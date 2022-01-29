class Car {
    #id;
    #license;
    #driver;
    #passegenger;
    constructor(license, driver) {
        this.#id;
        this.#license = license;
        this.#driver = driver;
        this.#passegenger = 0;
    }

    get getPassegenger () {
        return `The passegenger/s is/are: ${this.#passegenger} `;
    }

    set setPassegenger (amount) {
        amount === 4 
        ? this.#passegenger = amount
        : console.log('Tienen que ser cuatro asientos.');
    }
    
    printDataCar() {
        console.group('Driver');
        console.table(this.#driver);
        console.groupEnd();
    }
};