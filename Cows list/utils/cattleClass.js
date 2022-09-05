export default class Cattle {
    constructor(IDNumber, stallNumber, cattleBreed, cattleName, cattleBirthday, milkProduction) {
        this.IDNumber = IDNumber;
        this.stallNumber = stallNumber;
        this.cattleBreed = cattleBreed;
        this.cattleName = cattleName;
        this.cattleBirthday = cattleBirthday;
        this.milkProduction = milkProduction;
    }

    getIDNumber () {
        return this.IDNumber;
    }

    getstallNumber () {
        return this.stallNumber;
    }

    getcattleBreed () {
        return this.cattleBreed;
    }

    getcattleName () {
        return this.cattleName;
    }

    getcattleBirthday () {
        return this.cattleBirthday;
    }

    getmilkProduction () {
        return this.milkProduction;
    }
}