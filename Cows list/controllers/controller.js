export default class Controller {
    initialize(model,view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(cattle) {
        return `<div class="customerrow">
        <h1>${cattle.getIDNumber()}</h1>
        <p>Stall: ${cattle.getstallNumber()}</p>
        <p>Breed: ${cattle.getcattleBreed()}</p>
        <p>Name: ${cattle.getcattleName()}</p>
        <p>Birthday: ${cattle.getcattleBirthday()}</p>
        <p>Production/year(kg): ${cattle.getmilkProduction()}</p>
        <div><button type="button" id="${cattle.getIDNumber()}">Delete</button></div>
        </div>`
    }

    IDSearch (IDNumber) {
        const cattle = this.model.cattleList.getCattle(IDNumber);
        let template ="";

        if (cattle !== null) {
            template = this.buildTemplate(cattle);
        } else {
            template = `<tr class="customerrow">
            <td colspan="7">No cattle found with this ID number</td>
            </tr>`
        }

        this.view.message(template);
    }

    search(searchCattle) {
        const cattle = this.model.cattleList.search(searchCattle);
        let template = "";

        if (cattle !== null) {
            template = this.buildTemplate(cattle);
        } else {
            template = `<tr class="customerrow">
            <td colspan="7">No cattle found with those criterias</td>
            </tr>`
        }

        this.view.message(template);
    }

    showAllCattles() {
        let template = "";
        for (const cattle of this.model.cattleList.allCattles()){
            template += this.buildTemplate(cattle);
        }
        this.view.message(template);
    }

    newCattle(cattle) {
        const doesCattleExist = this.model.cattleList.getCattle(cattle.IDNumber);

        if (doesCattleExist === null) {
            this.model.cattleList.addCattle(cattle.IDNumber, cattle.stallNumber, cattle.cattleBreed, cattle.cattleName, cattle.cattleBirthday, cattle.milkProduction);
            this.view.snackbar("the cattle has been added to the list");
            this.showAllCattles();
        } else {
            this.view.snackbar("the cattle already exist");
        }
    }

    deleteCattle(ID) {
        this.model.cattleList.deleteCattle(ID);
        this.view.snackbar("The cattle has been deleted from the list")
    }
}