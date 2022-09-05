import Cattle from "../utils/cattleClass.js"

export default class View {
    constructor (controller) {
        const self = this;
        const IDSearchForm = document.getElementById("IDSearchForm");
        const IDField = document.getElementById("IDField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const stallNumber = document.getElementById("stallNumber");
        const cattleBreed = document.getElementById("cattleBreed");
        const cattleName = document.getElementById("cattleName");
        const cattleBirthday = document.getElementById("cattleBirthday");
        const milkProduction = document.getElementById("milkProduction");
        const showAllCattlesButton = document.getElementById("showAllCattlesButton");
        const cattleDialogForm = document.getElementById("cattleDialogForm");
        const addCattleButton = document.getElementById("addCattleButton");
        const cattleDialog = document.getElementById("cattleDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenIDField = document.getElementById("hiddenIDField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllCattlesButton.onclick = function() {
            self.controller.showAllCattles();
        }

        IDSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.IDSearch(IDField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const preciseCattle = new Cattle ("", stallNumber.value, cattleBreed.value, cattleName.value, cattleBirthday.value, milkProduction.value);
            self.controller.search(preciseCattle);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function() {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function() {
            searchPanel.classList.remove("searchPanelAnim");
        }

        //Dialog Event Handlers
        addCattleButton.onclick = function() {
            cattleDialogForm.reset();
            cattleDialog.showModal();
        }

        cancelButton.onclick = function() {
            cattleDialog.close();
        }

        cattleDialogForm.onsubmit = function(e) {
            e.preventDefault();
            self.controller.newCattle({
                IDNumber: document.getElementById("IDfield").value,
                stallNumber: parseFloat(document.getElementById("stallNumberfield").value),
                cattleBreed: document.getElementById("cattleBreedfield").value,
                cattleName: document.getElementById("cattleNamefield").value,
                cattleBirthday: document.getElementById("cattleBirthdayfield").value,
                milkProduction: parseFloat(document.getElementById("milkProductionfield").value)
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenIDField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function() {
            self.controller.deleteCattle(hiddenIDField.value);
            self.controller.showAllCattles();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML="" // Reset result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className= "show";
        setTimeout(function() {
            snackbar.className = snackbar.className.replace("show","");
        },3000);
    }

}