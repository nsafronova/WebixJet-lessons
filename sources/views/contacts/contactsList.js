import { contacts } from "models/contacts.js";
import { JetView } from "webix-jet";

export default class СontactsList extends JetView {
	config() {
		return {
			view: "list",
			template: " <strong> Name: </strong> #Name# <strong> Email: </strong> #Email# <strong> Status: </strong> #Status# <strong> Country: </strong> #Country# ",
			css: "webix_shadow_medium"
		};
	}

	init(view) {
		view.parse(contacts);
	}
}
