import {BaseForm} from '../base-form';
import $ from 'jquery/dist/jquery';
import 'jquery-validation';
import {ServerTools} from '../api/serverTools';

export class FindForm extends BaseForm {

	init() {
		this.serverTools = new ServerTools();
		// this.$element.find('.js-input').on('change', () => {
		// 	this.$element.trigger('change');
		// });

		this.$element.on('keyup', (e) => {
			const $form = this.$element;
			const formData = {
				wish: this.$element.find('.js-input-wish').val(),
				have: this.$element.find('.js-input-have').val(),
			};

			this.serverTools.find(formData);
		});
	}

	submitFunction(form) {
	}
}