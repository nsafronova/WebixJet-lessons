import { JetView } from "webix-jet";

export default class Settings extends JetView {
   config() {
      return {
         view: "segmented", multiview: true, value: 1,
         options: [
            { id: "1", value: "EN" },
            { id: "2", value: "RU" },
         ]
      }
   }
}