import {countries} from "models/countries";
import {statuses} from "models/statuses";
import {JetView} from "webix-jet";

import DataTable from "./dataCountries/DataTable";


export default class DataView extends JetView {
	config() {
		return {
			view: "tabview",
			cells: [
				{
					header: "Countries",
					body: new DataTable(this.app, countries)


				},
				{
					header: "Statuses",
					body: new DataTable(this.app, statuses)

				}

			]
		};
	}
}
