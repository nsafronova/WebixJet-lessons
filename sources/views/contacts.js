import {JetView} from "webix-jet";

import contactsList from "./contacts/contactsList.js";
import Form from "./contacts/form.js";


export default class Contacts extends JetView {
	config() {
		const ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				contactsList,
				Form
			]
		};
		return ui;
	}
}
