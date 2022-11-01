import { JetView } from "webix-jet";
import countriesTable from "./dataCountries/countriesTable";
import statusesTable from "./dataCountries/statusesTable";

export default class DataView extends JetView {
	config() {
		return {
			view: "tabview",
			cells: [
				{
					header: 'Countries',
					body: countriesTable
				},
				{
					header: 'Statuses',
					body: statusesTable
				}
			]
		}
	}
}
