import {BaseForm} from '../base-form';
import $ from 'jquery/dist/jquery';
import 'jquery-validation';
import {ServerTools} from '../api/serverTools';

export class FindLiteForm extends BaseForm {

	init() {
		this.serverTools = new ServerTools();

		this.$element.on('keyup', (e) => {
			const $form = this.$element;
			this.serverTools.getGames( this.$element.find('.js-input-query').val());
		});
	}

	submitFunction(form) {
	}
}