import {JetView} from "webix-jet";

export default class Settings extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();
		return {
			rows: [
				{
					view: "segmented",
					label: _("Language"),
					inputWidth: 300,
					options: [
						{id: "en", value: _("English")},
						{id: "ru", value: _("Russian")}
					],
					click: () => this.toggleLanguage(),
					value: lang
				},
				{}
			]
		};
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.getRoot().queryView({view: "segmented"}).getValue();
		langs.setLang(value);
	}
}
