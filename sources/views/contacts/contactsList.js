import { JetView } from "webix-jet";
import { contacts } from "models/contacts.js"

export default class contactsList extends JetView {
   config() {
      return {
         view: "list",
         template: ' <strong> Name: </strong> #Name# <strong> Email: </strong> #Email# <strong> Status: </strong> #Status# <strong> Country: </strong> #Country# ',
         autoConfig: true, css: "webix_shadow_medium", fillspace: true
      };
   }

   init(view) {
      view.parse(contacts);
   }
}