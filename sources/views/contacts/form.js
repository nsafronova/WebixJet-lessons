import {JetView} from "webix-jet";

import contacts from "../../models/contacts";
import countries from "../../models/countries";
import statuses from "../../models/statuses";

export default class Form extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			view: "form",
			localId: "myform",
			width: 400,
			elements: [
				{view: "text", name: "Name", label: _("Name")},
				{view: "text", name: "Email", label: _("Email")},
				{
					view: "combo",
					name: "Status",
					label: _("Status"),
					options: {
						filter(item, value) {
							if
							(item.Name.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
							return false;
						},
						body: {
							template: "#Name#",
							data: statuses
						}
					}
				},
				{
					view: "combo",
					name: "Country",
					label: _("Country"),
					options: {
						filter(item, value) {
							if
							(item.Name.toString().toLowerCase().indexOf(value.toLowerCase()) !== -1) return true;
							return false;
						},
						body: {
							template: "#Name#",
							data: countries
						}
					}
				},
				{
					view: "button",
					label: _("Save"),
					type: "form",
					click: () => {
						const values = this.getRoot().getValues();
						this.app.callEvent("onDataEditStop", [values]);
					}
				},
				{
					view: "button",
					label: _("Clear")
				},
				{}
			]

		};
	}

	init() {
		this.form = this.$$("myform");
	}

	ready() {
		this.setFormValues();
	}

	urlChange() {
		this.setFormValues();
	}

	setFormValues() {
		const id = this.getParam("id");
		if (id) {
			this.form.setValues(contacts.getItem(id));
		}
	}
}
