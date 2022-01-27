from car import Car
if __name__=="__main__":
    print("Hola Mundo")
    car = Car()
    car.id = 1
    car.license = "AMQ123"
    car.driver = "Andres Herrera"
    car.passegenger = 4
    print(vars(car))
    car2 = Car()
    car2.id = 2
    car2.license = "QWE456"
    car2.driver = "Andrea Fernandez"
    car2.passegenger = 3
    print(vars(car2))