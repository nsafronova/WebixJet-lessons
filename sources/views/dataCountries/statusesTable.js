import {statuses} from "models/statuses.js";
import {JetView} from "webix-jet";

export default class statusesTable extends JetView {
	config() {
		return {
			view: "datatable",
			autoConfig: true,
			css: "webix_shadow_medium",
			editable: true,
			columns: [
				{id: "id", header: "Id"},
				{id: "Name", header: "Name"},
				{id: "Icon", header: "", css: "webix_icon wxi-"},
				{
					view: "button", template: "{common.trashIcon()}", width: 40
				},
				{
					view: "button", autowidth: true, value: "Add new", css: "webix_primary"

				}

			],
			onClick: {
				"wxi-trash": function (e, id) {
					this.remove(id);
					return false;
				}
			}
		};
	}

	init(view) {
		view.parse(statuses);
	}
}
