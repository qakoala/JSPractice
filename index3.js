class Car {
    constructor(name, year) {
        this.name=name;
        this.year=year;
    }

    age(){
        let age = 2022 - this.year;
        return age;
    }
}