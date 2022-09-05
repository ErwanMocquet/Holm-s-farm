import Cattle from "./cattleClass.js";

export default class Inventory  {
    constructor() {
        this.cattles = [];
    }

    addCattle(IDNumber, stallNumber, cattleBreed, cattleName, cattleBirthday, milkProduction) {
        const newCattle = new Cattle(IDNumber, stallNumber, cattleBreed, cattleName, cattleBirthday, milkProduction);
        this.cattles.push(newCattle);
    }

    getCattle(IDNumber) {
        for (const cattle of this.cattles) {
            if (IDNumber == cattle.IDNumber) {
                return cattle;
            }
        }

        // The value null represent the intentional absence of an object value.
        return null;
    }

    search(preciseCattle) {
        // Destructuring
        const {IDNumber, stallNumber, cattleBreed, cattleName, cattleBirthday, milkProduction} = preciseCattle;
        for (const cattle of this.cattles) {
            if(cattle.stallNumber==stallNumber && cattle.cattleBreed===cattleBreed && cattle.cattleName===cattleName && cattle.cattleBirthday===cattleBirthday && cattle.milkProduction<=milkProduction ) {
                return cattle;
            }
        }

        return null;
    }

    compare_lsn( a, b )
    {
    if ( a.cattleName.toLowerCase() < b.cattleName.toLowerCase()){
      return -1;
    }
    if ( a.cattleName.toLowerCase() > b.cattleName.toLowerCase()){
      return 1;
    }
    return 0;
    }

    allCattles() {
        this.cattles.sort(this.compare_lsn)
        return this.cattles;
    }

    deleteCattle(ID) {
        const index = this.cattles.map(cattle => cattle.IDNumber).indexOf(ID);
        this.cattles.splice(index, 1); //Removes cattle from cattle object list
    }
}