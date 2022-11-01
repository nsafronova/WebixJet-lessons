import { JetView } from "webix-jet";
import { statuses } from "models/statuses"

export default class statusesTable extends JetView {
   config() {
      return {
         view: 'datatable', autoConfig: true, css: "webix_shadow_medium", id: 'top:statusesTable'
      }
   }
   init(view) {
      view.parse(statuses);
   }
}