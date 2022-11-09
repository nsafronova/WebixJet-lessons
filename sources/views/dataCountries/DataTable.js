import {JetView} from "webix-jet";

export default class DataTable extends JetView {
	constructor(app, data) {
		super(app);
		this._gridData = data;
	}

	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{
					view: "text", name: "input", label: _("Name"), localId: "inputData"
				},
				{
					view: "button",
					autowidth: false,
					value: _("Add new"),
					css: "webix_primary",
					click: () => {
						let values = this.$$("inputData").getValue();
						this.$$("mydata").add({
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
						{id: "id", header: "#"},
						{id: "Name", header: _("Name"), editor: "text", fillspace: true},
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

	init() {
		this.$$("mydata").parse(this._gridData);
	}
}
