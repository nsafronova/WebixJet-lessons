import {JetView} from "webix-jet";

import ContactsList from "./contacts/contactsList";
import Form from "./contacts/form";


export default class Contacts extends JetView {
	config() {
		const ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				ContactsList,
				Form
			]
		};
		return ui;
	}

	init() {
		this.on(this.app, "contacts:selected", (id) => {
			this.setParam("id", id, true);
		});
	}
}
