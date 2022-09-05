import Inventory from "../utils/inventoryClass.js";

export default class Model {
    constructor() {
        this.cattleList = new Inventory;
        this.cattleList.addCattle("22-049",1,"Prim'Holstein","Marguerite","11/05/2019",10000);
        this.cattleList.addCattle("22-050",1,"Prim'Holstein","Candice","06/06/2019",9000);
        this.cattleList.addCattle("22-051",1,"Prim'Holstein","Betty Sue","31/03/2019",12000);
        this.cattleList.addCattle("22-052",1,"Prim'Holstein","Clarabelle","20/03/2019",10000);
        this.cattleList.addCattle("22-053",1,"Prim'Holstein","Henrietta","25/04/2019",7000);
        this.cattleList.addCattle("22-054",1,"Prim'Holstein","Ella","09/07/2019",9000);
        this.cattleList.addCattle("22-055",1,"Prim'Holstein","Nettie","16/01/2019",13000);
        this.cattleList.addCattle("22-056",1,"Prim'Holstein","Dorothy","12/07/2019",11500);
        this.cattleList.addCattle("22-057",1,"Prim'Holstein","Molly","14/06/2019",10500);
        this.cattleList.addCattle("22-058",1,"Prim'Holstein","Gertie","01/08/2019",9500);
        this.cattleList.addCattle("22-059",2,"Red Angus","Anna","20/01/2020",8000);
        this.cattleList.addCattle("22-060",2,"Red Angus","Penelope","16/03/2020",7500);
        this.cattleList.addCattle("22-061",2,"Brown Suiss","Bernie","29/04/2020",10000);
        this.cattleList.addCattle("22-062",2,"Brangus","Ella","31/05/2020",10500);
        this.cattleList.addCattle("22-063",2,"Milka","Milky","31/09/2020",15000);
        this.cattleList.addCattle("22-064",2,"Milka","Wafer","31/11/2019",16000);
    }
}