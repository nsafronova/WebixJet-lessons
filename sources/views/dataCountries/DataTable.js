import {JetView} from "webix-jet";

export default class DataTable extends JetView {
	constructor(app, data) {
		super(app);
		this._gridData = data;
	}

	config() {
		return {
			rows: [
				{
					view: "text", name: "input", label: "Name", localId: "inputData"
				},
				{
					view: "button",
					autowidth: false,
					value: "Add new",
					css: "webix_primary",
					click() {
						let values = this.$scope.$$("inputData").getValue();
						this.$scope.$$("mydata").add({
							Name: values
						});
					}
				},
				{
					view: "datatable",
					localId: "mydata",
					css: "webix_shadow_medium",
					editable: true,
					columns: [
						{id: "id", header: "Id"},
						{id: "Name", header: "Name", editor: "text", fillspace: true},
						{id: "Icon", header: "", template: "<span class='webix_icon wxi-#Icon#'></span>"},
						{
							id: "delete", header: "", css: "pointer", template: "{common.trashIcon()}", width: 50
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

	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}
