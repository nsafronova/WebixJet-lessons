import { countries } from "models/countries";
import { JetView } from "webix-jet";
import { ids } from "../helpers";

export default class CountriesTable extends JetView {
   config() {
      return {
         rows: [
            {
               view: 'text', name: 'input', id: ids.inputCountry, label: "Name"
            },
            {
               view: "button", autowidth: false, value: "Add new", css: "webix_primary", click: function () {
                  let values = $$(ids.inputCountry).getValue()
                  $$(ids.countries).add({
                     'Name': values
                  })
               }
            },
            {
               view: "datatable",
               id: ids.countries,
               css: "webix_shadow_medium",
               editable: true,
               columns: [
                  { id: "id", header: "Id" },
                  { id: "Name", header: "Name", editor: "text", fillspace: true },
                  {
                     id: "delete", header: "", css: "pointer", template: "{common.trashIcon()}", width: 50
                  }
               ],
               onClick: {
                  "wxi-trash": function (e, id) {
                     this.remove(id);
                     return false;
                  }
               }
            }
         ]
      };
   }

   init(view) {
      this.$$(ids.countries).parse(countries);
   }
}
