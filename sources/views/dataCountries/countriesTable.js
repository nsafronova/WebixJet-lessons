import { JetView } from "webix-jet";
import { countries } from "models/countries";

export default class countriesTable extends JetView {
   config() {
      return {
         view: "datatable", autoConfig: true, css: "webix_shadow_medium", id: 'top:countriesTable'
      }
   }
   init(view) {
      view.parse(countries);
   }
}