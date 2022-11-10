import {JetView} from "webix-jet";

import contacts from "../../models/contacts";

export default class СontactsList extends JetView {
	config() {
		return {

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
		};
	}

	init() {
		this.list = this.$$("mylist");
		this.list.parse(contacts);

		this.on(this.list, "onAfterSelect", (id) => {
			this.app.callEvent("contacts:selected", [id]);
		});

		this.on(this.app, "onDataEditStop", (contactsData) => {
			if (contactsData) {
				if (contactsData.id) contacts.updateItem(contactsData.id, contactsData);
				else contacts.add(contactsData);
			}
		});
	}

	ready() {
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
