import { countries } from "models/countries";
import { JetView } from "webix-jet";

export default class countriesTable extends JetView {
   config() {
      return {
         rows: [
            {
               view: 'text', name: 'input', id: 'inputCountry', label: "Name"
            },
            {
               view: "button", autowidth: false, value: "Add new", css: "webix_primary", click: function () {
                  let values = $$('inputCountry').getValue()
                  $$('countries').add({
                     'Name': values
                  })
               }
            },
            {
               view: "datatable",
               id: 'countries',
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
      this.$$('countries').parse(countries);
   }
}
