import { statuses } from "models/statuses.js";
import { JetView } from "webix-jet";
import { ids } from "../helpers";

export default class StatusesTable extends JetView {
   config() {
      return {
         rows: [
            {
               view: 'text', name: 'input', id: ids.inputStatuses, label: "Name"
            },
            {
               view: "button", autowidth: false, value: "Add new", css: "webix_primary", click: function () {
                  let values = $$(ids.inputStatuses).getValue()
                  $$(ids.statuses).add({
                     'Name': values
                  })
               }
            },
            {
               view: "datatable",
               id: ids.statuses,
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
      this.$$(ids.statuses).parse(statuses);
   }
}

