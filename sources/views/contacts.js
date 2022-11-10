import {JetView} from "webix-jet";

import contacts from "../models/contacts";
import Form from "./contacts/form";


export default class Contacts extends JetView {
	config() {
		const ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				{
					view: "list",
					localId: "mylist",
					select: true,
					template: "<span class=\"removeBtn webix_icon wxi wxi-close\"></span> <strong> Name: </strong> #Name# <strong> Email: </strong> #Email# <strong> Status: </strong> #Status# <strong> Country: </strong> #Country# ",
					css: "webix_shadow_medium",
					onClick: {
						removeBtn(e, id) {
							contacts.remove(id);
							return false;
						}
					}
				},
				Form
			]
		};
		return ui;
	}

	init() {
		this.list = this.$$("mylist");
		this.list.parse(contacts);

		this.on(this.list, "onAfterSelect", (id) => {
			this.setParam("id", id, true);
		});
	}

	ready() {
		this.on(this.app, "onDataEditStop", (contactsData) => {
			if (contactsData) {
				if (contactsData.id) contacts.updateItem(contactsData.id, contactsData);
				else contacts.add(contactsData);
			}
		});
	}

	urlChange() {
		let id = this.getParam("id");
		let firstItem = contacts.getFirstId();

		if (id) {
			this.list.select(id);
		}
		else if (firstItem) {
			this.list.select(firstItem);
		}
	}
}
