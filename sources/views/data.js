import {countries} from "models/countries";
import {statuses} from "models/statuses";
import {JetView} from "webix-jet";

import DataTable from "./dataCountries/DataTable";


export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			view: "tabview",
			cells: [
				{
					header: _("Countries"),
					body: new DataTable(this.app, countries)


				},
				{
					header: _("Statuses"),
					body: new DataTable(this.app, statuses)

				}

			]
		};
	}
}
