import {JetView} from "webix-jet";

import contacts from "../../models/contacts";

export default class СontactsList extends JetView {
	config() {
		return {

			view: "list",
			localId: "mylist",
			select: 1,
			template: "<span class=\"removeBtn webix_icon wxi wxi-close\"></span> <strong> Name: </strong> #Name# <strong> Email: </strong> #Email# <strong> Status: </strong> #Status# <strong> Country: </strong> #Country# ",
			css: "webix_shadow_medium",
			onClick: {
				removeBtn(e, id) {
					this.remove(id);
					return false;
				}
			}
		};
	}

	init(view) {
		this.list = this.$$("mylist");
		view.parse(contacts);
	}

	ready() {
		this.on(this.list, "onAfterSelect", (id) => {
			this.show(`../contacts?id=${id}`);
			this.app.callEvent("pushToForm", [contacts[--id]]);
		});

		this.on(this.app, "onDataEditStop", (contactsData) => {
			if (contactsData) {
				if (contactsData.id) this.list.updateItem(contactsData.id, contactsData);
				else this.list.add(contactsData);
			}
		});
	}

	urlChange() {
		let id = this.getParam("id");

		if (id) {
			this.list.select(id);
		}
		else this.list.select(1);
	}
}
