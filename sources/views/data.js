import { JetView } from "webix-jet";
import countriesTable from "./dataCountries/countriesTable";
import statusesTable from "./dataCountries/statusesTable";

export default class DataView extends JetView {
	config() {
		const ui = {
			view: "tabbar", id: 'tabbar',
			multiview: true, options: [
				{ value: 'Countries', id: 'countriesTable' },
				{ value: 'Statuses', statusesTable }
			],
			on: {
				onChange: function (nextId, prevId) {
					webix.animate($$(prevId).$view, { type: "fade", duration: 250 });
				}
			},
			animate: { type: "show", delay: 300 },
			on: {
				onViewChange: function (prevId, nextId) {
					webix.html.addCss($$(nextId).$view, "animated fadeIn");
					webix.delay(function () {
						webix.html.removeCss(this.$view, "animated fadeIn");
					}, $$(nextId), null, 500);
				}
			}
		}
		return ui
	}
}
