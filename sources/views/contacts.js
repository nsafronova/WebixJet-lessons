import { JetView } from "webix-jet";

import ContactsList from "./contacts/contactsList.js";
import Form from "./contacts/form.js";


export default class Contacts extends JetView {
	config() {
		const ui = {
			localId: 'mylist',
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				ContactsList,
				Form,
			]
		};
		return ui;
	}

	init() {

	}
}
