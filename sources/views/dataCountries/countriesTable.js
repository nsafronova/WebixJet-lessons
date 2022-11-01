import { JetView } from "webix-jet";
import { countries } from "models/countries";

export default class countriesTable extends JetView {
   config() {
      return {
         view: "datatable",
         autoConfig: true,
         css: "webix_shadow_medium",
         editable: true,
         columns: [
            { id: "id", header: "Id" },
            { id: 'Name', header: "Name" },
            {
               id: "delete", header: "", css: "pointer", template: "{common.trashIcon()}", width: 50
            },
         ],
         onClick: {
            'wxi-trash': function (e, id) {
               this.remove(id);
               return false;
            }
         }
      }
   }
   init(view) {
      view.parse(countries);
   }
}