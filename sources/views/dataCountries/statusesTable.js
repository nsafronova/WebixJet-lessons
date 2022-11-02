import { statuses } from "models/statuses.js";
import { JetView } from "webix-jet";

export default class StatusesTable extends JetView {
   config() {
      return {
         rows: [
            {
               view: 'text', name: 'input', id: 'inputStatuses', label: "Name"
            },
            {
               view: "button", autowidth: false, value: "Add new", css: "webix_primary", click: function () {
                  let values = $$('inputStatuses').getValue()
                  $$('statuses').add({
                     'Name': values
                  })
               }
            },
            {
               view: "datatable",
               id: 'statuses',
               css: "webix_shadow_medium",
               editable: true,
               columns: [
                  { id: "id", header: "Id" },
                  { id: "Name", header: "Name", editor: "text", fillspace: true },
                  { id: "Icon", header: "", template: "<span class='webix_icon wxi-#Icon#'></span>", },
                  {
                     view: "button", template: "{common.trashIcon()}", width: 40
                  },
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
      this.$$('statuses').parse(statuses);
   }
}

