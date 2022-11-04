import { contacts } from "models/contacts.js";
import { JetView } from "webix-jet";

export default class СontactsList extends JetView {
	config() {

		return {

			view: "list",
			localId: 'mylist',
			select: 1,
			template: `<span class="removeBtn webix_icon wxi wxi-close"></span> <strong> Name: </strong> #Name# <strong> Email: </strong> #Email# <strong> Status: </strong> #Status# <strong> Country: </strong> #Country# `,
			css: "webix_shadow_medium",
			onClick: {
				removeBtn: function (e, id) {
					console.log(contacts);
					contacts.remove(id);
					return false;
				}
			}
		};
	}

	init(view) {
		this.list = this.$$('mylist');
		view.parse(contacts);

	}

	ready() {
		this.on(this.list, "onAfterSelect", (id) => {
			this.show(`../contacts/form/?id=${id}`);
			this.app.callEvent("pushToForm", [contacts[--id]]);
		});

		this.on(this.app, "onDataEditStop", (contacts) => {
			if (contacts) {
				if (contacts.id)
					this.list.updateItem(contacts.id, contacts);
				else
					this.list.add(contacts);
			}
		});

		this.list.select(1)
	}

}
