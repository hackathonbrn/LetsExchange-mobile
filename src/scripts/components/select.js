import {BaseComponent} from '../base-component';

import 'jquery/dist/jquery';

import 'select2/dist/js/select2.full.min';
import {ServerTools} from '../api/serverTools';

export class Select extends BaseComponent {
	init() {
		const selectConsole = $('.js-console-select');
		selectConsole.select2({
			'theme': 'light',
			minimumResultsForSearch: Infinity,
		});
		selectConsole.on('change.select2', () => {
			const serverTools = new ServerTools();
			serverTools.getExchange(selectConsole.val());
		});
	}
}
