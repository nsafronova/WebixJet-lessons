import { JetView } from "webix-jet";

export default class Form extends JetView {
	config() {
		return {
			view: "form",
			width: 400,
			autoheight: false,
			elements: [
				{ view: "text", name: "Name", label: "Name" },
				{ view: "text", name: "Email", label: "Email" },
				{ view: "text", name: "Status", label: "Status" },
				{ view: "text", name: "Country", label: "Country" },
				{ view: "button", label: "Save", type: "form" },
				{
					view: "button",
					label: "Clear"
				}
			]
		};
	}
}
