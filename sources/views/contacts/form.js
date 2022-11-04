import { JetView } from "webix-jet";
import { contacts } from "models/contacts.js";
import { countries } from "models/countries.js"
import { statuses } from "models/statuses.js"

export default class Form extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			view: "form",
			localId: 'myform',
			width: 400,
			elements: [
				{ view: "text", name: "Name", label: _("Name") },
				{ view: "text", name: "Email", label: _("Email") },
				{
					view: "combo", name: "Status", label: _("Status"), options: {
						filter: function (item, value) {
							if (item.name.toString().toLowerCase().indexOf(value.toLowerCase()) === 0)
								return true;
							return false;
						},
						body: {
							template: "<span class='webix_icon wxi-#Icon#'></span> #Name# ",
							data: statuses
						}
					}
				},
				{
					view: "combo", name: "Country", label: _("Country"), options: {
						filter: function (item, value) {
							if (item.name.toString().toLowerCase().indexOf(value.toLowerCase()) === 0)
								return true;
							return false;
						},
						body: {
							template: "#Name# ",
							data: countries
						}
					}
				},
				{
					view: "button", label: _("Save"), type: "form", click: () => {
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
		this.form = this.$$('myform')

		this.on(this.app, "pushToForm", (value) => {
			if (value) {
				let selectedObj = {
					'Name': value.Name,
					'Email': value.Email,
					'Status': value.Status,
					'Country': value.Country
				}
				this.form.setValues(selectedObj)

			}
		});
	}

}
