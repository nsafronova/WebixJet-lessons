/* eslint-disable no-undef */
import { JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";
import "./styles/app.css";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug: true,
			start: "/top/contacts/"
		};

		super({ ...defaults, ...config });
	}
}

const app = new MyApp();

app.attachEvent("app:error:resolve", (err) => {
	console.log(err);
	webix.delay(() => app.show("/top"));
});

app.use(plugins.Locale);

if (!BUILD_AS_MODULE) {
	webix.ready(() => app.render());
}

