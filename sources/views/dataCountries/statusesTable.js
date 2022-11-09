import {JetView} from "webix-jet";

import statuses from "../../models/statuses";

export default class StatusesTable extends JetView {
	config() {
		return {
			rows: [
				{
					view: "text", name: "input", localId: "inputStatuses", label: "Name"
				},
				{
					view: "button",
					autowidth: false,
					value: "Add new",
					css: "webix_primary",
					click() {
						let values = this.$$("inputStatuses").getValue();
						this.$$("statuses").add({
							Name: values
						});
					}
				},
				{
					view: "datatable",
					localId: "statuses",
					css: "webix_shadow_medium",
					editable: true,
					columns: [
						{id: "id", header: "Id"},
						{id: "Name", header: "Name", editor: "text", fillspace: true},
						{id: "Icon", header: "", template: "<span class='webix_icon wxi-#Icon#'></span>"},
						{
							view: "button", template: "{common.trashIcon()}", width: 40
						}
					],
					onClick: {
						"wxi-trash": function (e, id) {
							this.remove(id);
							return false;
						}
					}
				}
			]
		};
	}

	init() {
		this.$$("statuses").parse(statuses);
	}
}

